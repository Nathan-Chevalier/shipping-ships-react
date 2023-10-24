/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wave-a": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='826' height='60' preserveAspectRatio='none' viewBox='0 0 826 60'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3crect width='826' height='60' x='0' y='0' fill='rgba(34%2c 100%2c 171%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c8 C 55.2%2c11.2 165.6%2c25.2 276%2c24 C 386.4%2c22.8 442%2c1.8 552%2c2 C 662%2c2.2 771.2%2c20.4 826%2c25L826 60L0 60z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c31 C 27.6%2c36 82.8%2c56 138%2c56 C 193.2%2c56 220.8%2c31 276%2c31 C 331.2%2c31 358.8%2c55 414%2c56 C 469.2%2c57 496.8%2c36 552%2c36 C 607.2%2c36 635.2%2c57.2 690%2c56 C 744.8%2c54.8 798.8%2c35.2 826%2c30L826 60L0 60z' fill='rgba(34%2c 100%2c 171%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='826' height='60' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [],
};
