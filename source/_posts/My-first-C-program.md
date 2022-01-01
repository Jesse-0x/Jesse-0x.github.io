---
title: My first C program
comments: true
math: true
quicklink: true
date: 2019-11-10 21:46:32
excerpt: My first C program & note
categories:
  - [Programing Language, C]
tags:
  - Experince & Guide
---

<!-- more -->

### 1-1 basic C info

1.Every C language need have a **main()** function. Program begin with **main()** .

2. **/\*  \*/** use to description program. 

3. **printf()** use to print to the screen . **printf()** will in **stdio.h** headfile say.

4. **stdio.h** is a headfile (Standard input and output header file), **#include** is a Preprocessing command,use in get in the headfile.When translater meet **printf()** function,if do not find **stdio.h** headfile ,it will have translate wrong.

5. **return 0;** use to get out the program.

#### Code

main()

/*  */

printf()

stdio.h

\#include —— #include <stdio.h>

return 0;

#### Program

```c
#include <stdio.h>

int main(){
  /* My first C program */
  printf("Hello, World! \n");
  return 0;
}
```

