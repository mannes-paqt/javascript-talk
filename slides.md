---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: Javascript as backend
info: |
  ## Javascript as backend
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# Javascript as backend

<center><img src="/assets/title.jpg" style="height: 250px;" /></center>

---

# Javascript is weird

<div v-click.hide>
```ts {monaco}
console.log("11" - 1);
```
</div>
<div v-after>
```ts {monaco-run}
console.log("11" - 1);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log("11" + 1);
```
</div>
<div v-after>
```ts {monaco-run}
console.log("11" + 1);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(0.1 + 0.2 === 0.3);
```
</div>
<div v-after>
```ts {monaco-run}
console.log(0.1 + 0.2 === 0.3);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(17841401206000151)
```
</div>
<div v-after>
```ts {monaco-run}
console.log(17841401206000151)
```
</div>

<div v-click.hide>
```ts {monaco}
console.log([5, 4, 10000, 3, 2, 1].sort())
```
</div>
<div v-after>
```ts {monaco-run}
console.log([5, 4, 10000, 3, 2, 1].sort())
```
</div>

<style>
.slidev-vclick-hidden { display: none; }
</style>

---

# Javascript is weird #2

<div v-click.hide>
```ts {monaco}
console.log(0 == "0");
```
</div>
<div v-after>
```ts {monaco-run}
console.log(0 == "0");
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(0 == []);
```
</div>
<div v-after>
```ts {monaco-run}
console.log(0 == []);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log("0" == []);
```
</div>
<div v-after>
```ts {monaco-run}
console.log("0" == []);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log([1,2,3] + [4,5,6]);
```
</div>
<div v-after>
```ts {monaco-run}
console.log([1,2,3] + [4,5,6]);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(typeof ([] + []));
```
</div>
<div v-after>
```ts {monaco-run}
console.log(typeof ([] + []));
```
</div>

<style>
.slidev-vclick-hidden { display: none; }
</style>

---

# Javascript is weird #3

<div v-click.hide>
```ts {monaco}
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
```
</div>
<div v-after>
```ts {monaco-run}
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(parseInt(0.0000005));
```
</div>
<div v-after>
```ts {monaco-run}
console.log(parseInt(0.0000005));
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(typeof null);
```
</div>
<div v-after>
```ts {monaco-run}
console.log(typeof null);
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(Object.keys(null));
```
</div>
<div v-after>
```ts {monaco-run}
console.log(Object.keys(null));
```
</div>

<div v-click.hide>
```ts {monaco}
console.log(typeof NaN);
```
</div>
<div v-after>
```ts {monaco-run}
console.log(typeof NaN);
```
</div>

<style>
.slidev-vclick-hidden { display: none; }
</style>

---

# It's async!

you'll be awaiting everything

---

# I want this on my server

node logo

---

# The application is your server

easy landscape compared to php

---

# Taking it to production

hardening makes it ugly

---

# Let's add a framework

PHP without framework is also kinda bad

---

# It's async!

---

