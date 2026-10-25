LAGAYAN NG VIDEO (assets/video/)

Welcome page (index.html) at Main page (main.html), parehong background video:
  background.mp4          (pangunahin, H.264)
  background.webm         (kopya para sa mga browser na ayaw ng mp4)
  background-mobile.mp4   (mas magaan na bersyon, ginagamit sa phone)
Muted at naka-loop. Kapag walang video, background.jpg ang lalabas.

Gusto ng ibang video sa main page lang? Ilagay ang lobby.mp4 dito, tapos sa main.html idagdag
"assets/video/lobby.mp4|" sa simula ng data-video ng <video id="bgv">.

VIDEO SA ILALIM NG WELCOME PAGE (full-screen, lalabas kapag nag-scroll pababa sa index.html):
  intro.mp4     (H.264, pangunahin)   <- KAILANGANG ILAGAY DITO
  intro.webm    (opsyonal)
Awtomatikong nagpe-play (muted) kapag nakita na ang section, at nagpa-pause kapag nag-scroll palayo.
May controls para i-unmute. Kapag wala pa ang file, may mensaheng "The video could not be loaded right now"
at hindi masisira ang page.
