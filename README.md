# Frontend Component Job List :eyes:

<p>
<img src="./desktop.png" width="100%">
</p>
<p>
<img src="./mobile.png" width="100%">
</p>

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [What I learned](#what-i-learned)
- [License](#license)
- [Author Info](#get-in-touch)

---

## Description

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). All code are original.

The app can be accessed at the link below.

> https://ran-joblist.netlify.app/

---

## Technologies

- Frontend: React.js, JavaScript, HTML & CSS

---

## What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

- vertical center anchor tag inside div

```css
div {
  display: table-cell;
  margin: auto 0;
}
/* or can set line height for anchor tag which will adds to the padding of the container  */
```

- useRef in TypeScript

```ts
// error: Type 'MutableRefObject<undefined>' is not assignable to type 'LegacyRef<HTMLSpanElement> | undefined'. Type 'MutableRefObject<undefined>' is not assignable to type 'RefObject<HTMLSpanElement>'. Types of property 'current' are incompatible. Type 'undefined' is not assignable to type 'HTMLSpanElement| null'.

// option 1
const currTag = useRef<HTMLSpanElement>(null);

//option 2
const currTag = useRef() as React.MutableRefObject<HTMLSpanElement>;
```

- Type Assertion TypeScript

```ts
// option 1 // as
const myCanvas = document.getElementById("main_cavas") as HTMLCanvasElement;

//option 2 // <>
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## License

MIT License

---

## Get in touch

<div>
  <a href="https://www.instagram.com/ranwren/">
    <div>@ranwren</div>
    <img src="https://raw.githubusercontent.com/MikeCodesDotNET/MikeCodesDotNET/a8abbf37441f3253f74ea255a47f289208d7568c/Resources/instagram.svg" alt="Instagram" style="vertical-align:top; margin:4px">
  </a>
<a href="https://www.linkedin.com/in/ding-ran/">
  <div>@Ran Ding</div>
    <img src="https://raw.githubusercontent.com/MikeCodesDotNET/MikeCodesDotNET/a8abbf37441f3253f74ea255a47f289208d7568c/Resources/linkedIn.svg" alt="LinkedIn" style="vertical-align:top; margin:4px">
  </a>
</div>

[Back To The Top](#)
