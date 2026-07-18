import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sourcePath = resolve(root, "SonicCity.html");
const outputPath = resolve(root, "SonicCity-mobile.html");

let html = readFileSync(sourcePath, "utf8");

const mobileCss = String.raw`

/* SonicCity mobile mini-program adaptation */
:root{
  --mp-bg:#f6f7f9;
  --mp-surface:#ffffff;
  --mp-text:#111315;
  --mp-sub:#6d747b;
  --mp-line:rgba(17,19,21,.1);
  --mp-safe-bottom:env(safe-area-inset-bottom,0px);
}
html{background:var(--mp-bg);-webkit-text-size-adjust:100%;touch-action:manipulation}
body.mobile-miniapp{
  min-height:100dvh;
  background:var(--mp-bg);
  overscroll-behavior-y:none;
  -webkit-tap-highlight-color:transparent;
  padding-bottom:var(--mp-safe-bottom);
}
.mobile-miniapp button,
.mobile-miniapp input,
.mobile-miniapp textarea,
.mobile-miniapp select{font-size:16px}
.mobile-miniapp button{min-height:44px}
.mobile-miniapp .page{min-height:100dvh;padding-bottom:var(--mp-safe-bottom)}
.mobile-miniapp .interior{background:var(--mp-bg)}
.mobile-miniapp .topbar{
  position:sticky;
  top:0;
  z-index:70;
  min-height:56px;
  padding:8px 12px;
  padding-top:calc(8px + env(safe-area-inset-top,0px));
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  align-items:center;
  background:rgba(246,247,249,.92);
  border-bottom:1px solid rgba(17,19,21,.07);
  backdrop-filter:blur(18px);
}
.mobile-miniapp .brand{gap:8px;min-width:0}
.mobile-miniapp .logo{width:34px;height:34px;border-radius:10px;font-size:18px;border-width:1.5px}
.mobile-miniapp .brand b{font-size:16px;color:#111315;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mobile-miniapp .brand span{font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:50vw}
.mobile-miniapp .top-actions{
  justify-content:flex-end;
  flex-wrap:nowrap;
  max-width:48vw;
  overflow-x:auto;
  padding-bottom:2px;
  scrollbar-width:none;
}
.mobile-miniapp .top-actions::-webkit-scrollbar,
.mobile-miniapp .map-scroll::-webkit-scrollbar,
.mobile-miniapp .memory-shelf::-webkit-scrollbar,
.mobile-miniapp .rx-track-list::-webkit-scrollbar{display:none}
.mobile-miniapp .chip,
.mobile-miniapp .ghost{
  flex:0 0 auto;
  min-height:36px;
  border-radius:999px;
  padding:8px 12px;
  background:#fff;
  box-shadow:0 6px 18px rgba(17,19,21,.06);
}
.mobile-miniapp .cover-nav{
  position:fixed;
  top:calc(8px + env(safe-area-inset-top,0px));
  left:12px;
  right:12px;
  z-index:80;
  display:grid;
  grid-template-columns:auto 1fr auto;
  align-items:center;
  gap:8px;
  padding:0;
  pointer-events:auto;
}
.mobile-miniapp .cover-brand{
  min-height:40px;
  border-radius:999px;
  padding:0 14px;
  background:rgba(255,255,255,.9);
  color:#111315;
  box-shadow:0 10px 24px rgba(0,0,0,.18);
}
.mobile-miniapp .cover-links{display:none}
.mobile-miniapp .cover-quick-links{
  justify-self:end;
  display:flex;
  gap:6px;
  overflow-x:auto;
  max-width:58vw;
}
.mobile-miniapp .cover-quick-links button{
  min-height:38px;
  white-space:nowrap;
  border-radius:999px;
  padding:0 12px;
  background:rgba(255,255,255,.92);
  color:#111315;
}
.mobile-miniapp .globe-stage{min-height:100dvh;place-items:center;background:#020711}
.mobile-miniapp .cover-copy{
  top:42%;
  left:50%;
  width:calc(100vw - 28px);
  transform:translate(-50%,-50%);
}
.mobile-miniapp .cover-title{
  font-size:clamp(42px,16vw,78px);
  line-height:.92;
}
.mobile-miniapp .cover-copy p{font-size:13px;line-height:1.65;max-width:88vw;margin-inline:auto}
.mobile-miniapp .home-mode-switch{
  position:fixed;
  left:12px;
  right:12px;
  bottom:calc(18px + var(--mp-safe-bottom));
  top:auto;
  transform:none;
  width:auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  z-index:85;
}
.mobile-miniapp .home-mode-switch button{
  min-width:0;
  min-height:52px;
  padding:0 12px;
  border-radius:16px;
  font-size:15px;
}
.mobile-miniapp .ai-choice-panel{
  position:fixed;
  left:0;
  right:0;
  top:auto;
  bottom:0;
  width:100vw;
  max-height:min(78dvh,720px);
  transform:translateY(22px);
  border-radius:24px 24px 0 0;
  padding:18px 14px calc(92px + var(--mp-safe-bottom));
  box-shadow:0 -18px 48px rgba(0,0,0,.24);
}
.mobile-miniapp .globe-stage.mode-ai .ai-choice-panel,
.mobile-miniapp .globe-stage.ai-panel-open .ai-choice-panel{
  transform:translateY(0)!important;
}
.mobile-miniapp .ai-choice-panel.rx-expanded{
  left:0!important;
  right:0!important;
  top:calc(10px + env(safe-area-inset-top,0px))!important;
  bottom:0!important;
  width:100vw!important;
  height:auto!important;
  max-width:none!important;
  max-height:none!important;
  transform:none!important;
  border-radius:24px 24px 0 0;
}
.mobile-miniapp .ai-step,
.mobile-miniapp .rx-track,
.mobile-miniapp .receipt-ticket,
.mobile-miniapp .memory-room,
.mobile-miniapp .sound-package-item,
.mobile-miniapp .why-card,
.mobile-miniapp .task-card{
  border-radius:16px;
  box-shadow:0 8px 24px rgba(17,19,21,.07);
}
.mobile-miniapp .ai-key-row,
.mobile-miniapp .rx-actions,
.mobile-miniapp .receipt-wrap,
.mobile-miniapp .map-shell{
  grid-template-columns:1fr;
}
.mobile-miniapp .rx-track-list{
  display:flex;
  gap:12px;
  overflow-x:auto;
  scroll-snap-type:x mandatory;
  padding:2px 4px 8px;
}
.mobile-miniapp .rx-track{
  flex:0 0 min(82vw,340px);
  min-height:172px;
  scroll-snap-align:center;
}
.mobile-miniapp .ai-choice-panel.rx-expanded .rx-track-list{
  display:flex;
  grid-template-columns:none;
  height:auto;
}
.mobile-miniapp .ai-choice-panel.rx-expanded.rx-detail-open .rx-body,
.mobile-miniapp .ai-choice-panel.rx-expanded .rx-body{
  grid-template-columns:1fr;
}
.mobile-miniapp .rx-detail-panel{
  position:fixed;
  inset:0;
  z-index:140;
  max-height:none;
  height:100dvh;
  overflow:auto;
  border:0;
  border-radius:0;
  background:#fffdf5;
  box-shadow:none;
  padding-bottom:calc(22px + var(--mp-safe-bottom));
}
.mobile-miniapp .ai-choice-panel.rx-expanded.rx-detail-open .rx-detail-panel{
  display:block;
}
.mobile-miniapp .rx-detail-nav{
  position:sticky;
  top:0;
  z-index:6;
  min-height:58px;
  padding:8px 12px;
  padding-top:calc(8px + env(safe-area-inset-top,0px));
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  background:rgba(255,253,245,.92);
  border-bottom:1px solid rgba(17,19,21,.08);
  backdrop-filter:blur(18px);
}
.mobile-miniapp .rx-detail-nav button{
  min-height:42px;
  border:0;
  border-radius:999px;
  background:#111315;
  color:#fff;
  font-weight:950;
  box-shadow:0 8px 22px rgba(17,19,21,.12);
}
.mobile-miniapp .rx-detail-back{
  width:46px;
  padding:0;
  font-size:24px;
  line-height:1;
}
.mobile-miniapp .rx-detail-nav-actions{
  display:flex;
  gap:8px;
  align-items:center;
}
.mobile-miniapp .rx-detail-nav-actions button{
  min-width:44px;
  padding:0 13px;
  background:#fff;
  color:#111315;
  border:1px solid rgba(17,19,21,.1);
}
.mobile-miniapp .rx-detail-cover{
  height:min(36dvh,260px);
}
.mobile-miniapp .rx-detail-content{
  padding:22px 16px;
  gap:16px;
}
.mobile-miniapp .rx-detail-title{
  font-size:30px;
  line-height:1.12;
}
.mobile-miniapp .rx-detail-meta{
  font-size:13px;
}
.mobile-miniapp .rx-detail-audio{
  grid-template-columns:1fr;
}
.mobile-miniapp .rx-detail-audio button{
  min-height:48px;
}
.mobile-miniapp .rx-detail-why{
  min-height:180px;
  border-radius:16px;
}
.mobile-miniapp .layout{
  width:100%;
  padding:16px 12px calc(86px + var(--mp-safe-bottom));
}
.mobile-miniapp .page-title,
.mobile-miniapp .aisle-head{
  display:block;
  margin-bottom:14px;
}
.mobile-miniapp .page-title h2,
.mobile-miniapp .aisle-head h2{
  font-size:26px;
  line-height:1.1;
}
.mobile-miniapp .page-title p,
.mobile-miniapp .aisle-head p{
  margin-top:8px;
  font-size:13px;
  line-height:1.65;
}
.mobile-miniapp .map-scroll{
  overflow-x:auto;
  border-radius:18px;
  scroll-snap-type:x mandatory;
}
.mobile-miniapp .market-map{
  width:760px;
  max-width:none;
  padding:0;
  border-radius:18px;
  overflow:hidden;
  scroll-snap-align:start;
}
.mobile-miniapp .map-legend{
  position:relative;
  border-radius:18px;
  padding:16px;
}
.mobile-miniapp .shelf-wall{gap:12px}
.mobile-miniapp .shelf-level{
  grid-template-columns:1fr;
  gap:8px;
  padding:12px;
  border-radius:18px;
}
.mobile-miniapp .level-label{
  min-height:auto;
  padding:10px 12px;
  border-radius:12px;
}
.mobile-miniapp .albums{
  display:flex;
  gap:12px;
  overflow-x:auto;
  padding-bottom:4px;
  scroll-snap-type:x mandatory;
}
.mobile-miniapp .album{
  flex:0 0 min(68vw,230px);
  scroll-snap-align:center;
  border-radius:16px;
}
.mobile-miniapp .info-panel{
  position:fixed;
  inset:auto 0 0 0;
  width:100vw;
  height:min(86dvh,760px);
  border-radius:24px 24px 0 0;
  transform:translateY(106%);
  z-index:90;
  box-shadow:0 -24px 64px rgba(0,0,0,.24);
}
.mobile-miniapp .info-panel.show,
.mobile-miniapp .info-panel.active{
  transform:translateY(0);
}
.mobile-miniapp .close,
.mobile-miniapp .favorite-detail-close{
  width:46px;
  height:46px;
  min-height:46px;
}
.mobile-miniapp .info-scroll{
  height:100%;
  overflow:auto;
  padding-bottom:calc(18px + var(--mp-safe-bottom));
}
.mobile-miniapp .info-cover{min-height:188px;border-radius:0}
.mobile-miniapp .info-top,
.mobile-miniapp .detail-section{padding-inline:16px}
.mobile-miniapp .why-card{grid-template-columns:1fr;overflow:hidden}
.mobile-miniapp .why-card img{min-height:180px}
.mobile-miniapp .actual-photo-frame,
.mobile-miniapp .rx-detail-photo-frame{border-radius:16px}
.mobile-miniapp .task-actions,
.mobile-miniapp .info-actions,
.mobile-miniapp .favorite-detail-actions,
.mobile-miniapp .receipt-actions{
  grid-template-columns:1fr;
}
.mobile-miniapp .rating-row,
.mobile-miniapp .mood-row,
.mobile-miniapp .with-row,
.mobile-miniapp .tag-row,
.mobile-miniapp .favorite-detail-meta{
  overflow-x:auto;
  flex-wrap:nowrap;
  padding-bottom:4px;
}
.mobile-miniapp .rating-row button,
.mobile-miniapp .mood-row button,
.mobile-miniapp .with-row button{
  flex:0 0 auto;
  min-width:44px;
  min-height:44px;
}
.mobile-miniapp .favorite-stats{
  grid-template-columns:repeat(3,minmax(112px,1fr));
  overflow-x:auto;
  border-radius:16px;
}
.mobile-miniapp .favorite-stat{min-height:74px;padding:12px;border-right:1px solid rgba(75,60,45,.1)}
.mobile-miniapp .memory-room{padding:16px}
.mobile-miniapp .memory-card{flex-basis:64px;width:64px;height:196px;border-radius:14px}
.mobile-miniapp .favorite-detail-backdrop{
  align-items:end;
  padding:0;
}
.mobile-miniapp .favorite-detail-card{
  width:100vw;
  max-height:86dvh;
  grid-template-columns:1fr;
  border-radius:24px 24px 0 0;
}
.mobile-miniapp .favorite-detail-media{min-height:210px}
.mobile-miniapp .favorite-detail-body{padding:24px 18px calc(24px + var(--mp-safe-bottom))}
.mobile-miniapp .receipt-line{grid-template-columns:1fr;gap:8px}
.mobile-miniapp .receipt-item-side{align-items:flex-start}
.mobile-miniapp .receipt-qty button{width:36px;height:36px;min-height:36px}
.mobile-miniapp .toast{
  bottom:calc(86px + var(--mp-safe-bottom));
  max-width:calc(100vw - 32px);
  border-radius:14px;
}
.mobile-miniapp .miniapp-capsule{
  position:fixed;
  top:calc(10px + env(safe-area-inset-top,0px));
  right:12px;
  z-index:130;
  display:flex;
  overflow:hidden;
  border:1px solid rgba(17,19,21,.1);
  border-radius:999px;
  background:rgba(255,255,255,.9);
  box-shadow:0 10px 28px rgba(0,0,0,.13);
}
.miniapp-capsule button{
  width:42px;
  min-height:34px;
  border:0;
  background:transparent;
  color:#111315;
  font-weight:950;
}
.miniapp-capsule button + button{border-left:1px solid rgba(17,19,21,.1)}
@media (min-width:821px){
  body.mobile-miniapp{
    max-width:430px;
    margin:0 auto;
    box-shadow:0 0 0 1px rgba(17,19,21,.08),0 28px 80px rgba(17,19,21,.18);
  }
  .mobile-miniapp .cover-nav,
  .mobile-miniapp .home-mode-switch,
  .mobile-miniapp .miniapp-capsule{
    left:50%;
    right:auto;
    width:min(430px,100vw);
    transform:translateX(-50%);
  }
  .mobile-miniapp .miniapp-capsule{
    left:auto;
    right:calc((100vw - min(430px,100vw))/2 + 12px);
    width:auto;
    transform:none;
  }
  .mobile-miniapp .ai-choice-panel,
  .mobile-miniapp .info-panel,
  .mobile-miniapp .favorite-detail-card{
    left:50%;
    right:auto;
    width:min(430px,100vw);
    transform:translate(-50%,106%);
  }
  .mobile-miniapp .info-panel.show,
  .mobile-miniapp .info-panel.active{transform:translate(-50%,0)}
  .mobile-miniapp .globe-stage.mode-ai .ai-choice-panel,
  .mobile-miniapp .globe-stage.ai-panel-open .ai-choice-panel{transform:translate(-50%,0)!important}
}
`;

const mobileJs = String.raw`
<script>
(() => {
  document.body.classList.add("mobile-miniapp");

  const capsule = document.createElement("div");
  capsule.className = "miniapp-capsule";
  capsule.innerHTML = '<button type="button" data-mini-back aria-label="Back">&lt;</button><button type="button" data-mini-home aria-label="Home">o</button>';
  document.body.appendChild(capsule);

  const ensureShelf = () => {
    if (typeof openZone === "function" && !document.querySelector("#shelfWall")?.children.length) {
      openZone("metro");
    }
  };
  const goMini = page => {
    if (page === "shelfPage") ensureShelf();
    if (typeof go === "function") go(page);
    else location.hash = page;
  };
  capsule.addEventListener("click", event => {
    if (event.target.closest("[data-mini-home]")) goMini("doorPage");
    if (event.target.closest("[data-mini-back]")) {
      const active = document.querySelector(".page.active")?.id;
      const fallback = active === "shelfPage" ? "mapPage" : active === "mapPage" ? "doorPage" : "shelfPage";
      goMini(fallback);
    }
  });
  window.addEventListener("resize", () => document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px"));
  document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px");
})();
</script>`;

html = html
  .replace("<title>SonicCity</title>", "<title>SonicCity Mobile</title>")
  .replace('<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">')
  .replace("</style>", `${mobileCss}\n</style>`)
  .replace("</body>", `${mobileJs}\n</body>`);

writeFileSync(outputPath, html, "utf8");
console.log(`Generated ${outputPath}`);
