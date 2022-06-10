---
title: Online Desktop
comments: true
math: true
quicklink: true
date: 2020-11-09 15:49:44
top_image: /images/Online-Desktop/Online-Desktop.png
categories:
  - [Internet, Web Application]
  - [Operating System, Linux]
  - [Projects, Online Desktop]
  - [Tools, Docker]
tags:
  - Projects & Tools
  - Resource & Share
---

## [Online-Desktop](https://github.com/Jesse-0x/Online-Desktop)

A online KDE Desktop website can use for work



<!-- more -->

![image](/images/Online-Desktop/Online-Desktop.png)



This is a Desktop use docker, KDE neon official docker image and GUI memu, also x11vnc, and[ noVNC](https://github.com/novnc/noVNC)https://github.com/novnc/noVNC)

### Quick start

I was applying it to heroku, so please change the $PORT following files in order to run, or give a PORT value.

```
app/conf.dwebsockify.sh
```

and start running using docker.

### Example

https://online-desktop.herokuapp.com/vnc.html

Please be patient because it needs at least 2 min to start (the file was over large.)

and click the setting button on the sidebar, change `Scaling Mode` in to `local scaling`, then click connect botton.

</br>

</br>

Basically, it is a docker container that builds a GUI Desktop and uses VNC service to display it out, and uses noVNC as the client to build it into heroku.

![image](/images/Online-Desktop/build.png)

This project took me lots of time, every little change required a build, and every build envitually tooks me 2058.7s, which is about 35 minutes... If you like the project, please give me a[ star](https://github.com/Jesse-0x/Online-Desktop)!

### Extra

More info about docker is [here](/2020/11/04/)
