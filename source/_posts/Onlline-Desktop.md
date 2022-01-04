---
title: Onlline Desktop
comments: true
math: true
quicklink: true
date: 2020-11-09 15:49:44
top_image: /images/Online-Desktop/Online-Desktop.png
categories:
  - [Internet, Web Application]
  - [Operating System, Linux]
  - [Projects, Online Destop]
  - [Tools, Docker]
tags:
  - Projects & Tools
  - Resource & Share
---

## [Online-Desktop](https://github.com/Jesse-0x/Online-Desktop)

A online KDE Desktop website can use for work



<!-- more -->

![image](/images/Online-Desktop/Online-Desktop.png)



This is a Desktop use docker, KDE neon offical docker image and GUI memu, also x11vnc, and [noVNC](https://github.com/novnc/noVNC)

### Quick start

I was apply it to heroku, so please change the `$PORT` following files in order to run, or give a PORT value.

```
app/conf.dwebsockify.sh
```

and start running using docker.

### Example

https://online-desktop.herokuapp.com/vnc.html

please be patient because it need at least 2 min to start (the file was over large.)

and click the setting botton on the sidebar, change `Scaling Mode` in to `local scaling`, then click connect botton.

</br>

</br>

Basically, it is a docker container that build a GUI Desktop and use VNC service to display it out, and use noVNC as the client to build it in to heroku.

![image](/images/Online-Desktop/build.png)

This project took me lots of times, every little changes require a build, and every build envitually tooks me 2058.7s, which is about 35 minutes... If you like the project, please give me a [star](https://github.com/Jesse-0x/Online-Desktop)!

### Extra

More info about docker is [here](/2020/11/04/)
