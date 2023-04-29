import http
import http.server
import tempfile
from pathlib import Path

LIVE_JS = """
<script>
const host = `${window.location.protocol}//${window.location.hostname}`;
const socketUrl = `ws://${window.location.hostname}:5678`;
const webSocket = new WebSocket(socketUrl);

webSocket.onmessage = () => {
window.location.reload();
};
</script>
"""
SCRATCH = Path(tempfile.gettempdir()) / "livereload.html"
REPO_ROOT = Path(__file__).resolve().parent.parent
WWW_DIR = REPO_ROOT / "docs"


def add_live_js(content: str) -> str:
    return content.replace("</body>", LIVE_JS + "\n</body>")


class LiveHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        path = path.split('?')[0]
        ppath = WWW_DIR / path.lstrip("/")
        if ppath.is_dir():
            ppath = ppath / "index.html"
        if ppath.exists() and ppath.name.endswith(".html"):
            with open(ppath) as f:
                content = f.read()
            with open(SCRATCH, "w") as f:
                f.write(add_live_js(content))

            return str(SCRATCH)
        return super().translate_path(str(ppath.relative_to(REPO_ROOT)))


http.server.test(HandlerClass=LiveHandler)
