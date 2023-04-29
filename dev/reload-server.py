import signal
import asyncio
import os
import websockets
from pathlib import Path


DEV_DIR = REPO_ROOT = Path(__file__).resolve().parent
PID_FILE = DEV_DIR / "pid.txt"

signal.signal(signal.SIGUSR1, lambda a, b: None)

CONNECTIONS = set()


async def register(websocket):
    print("New connection", websocket)
    CONNECTIONS.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        CONNECTIONS.remove(websocket)


async def main():
    pid = str(os.getpid())
    with open(PID_FILE, "w") as f:
        f.write(pid)

    print(f"Running websocket server with pid {pid}")
    async with websockets.serve(register, os.getenv("HOST", "0.0.0.0"), 5678):

        # This will run when triggered from an external source via the SIGUSR1
        # signal
        def signal_handler(sig, frame):
            print(f"Sending refresh to {len(CONNECTIONS)} clients")
            websockets.broadcast(CONNECTIONS, "reload")

        signal.signal(signal.SIGUSR1, signal_handler)
        while True:
            await asyncio.sleep(10000)


if __name__ == "__main__":
    asyncio.run(main())
