declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}