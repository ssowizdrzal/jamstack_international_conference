module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    safelist: [
      //align
      "text-left",
      "text-center",
      "text-right",
      "text-justify",
      //background cokolor
      "bg-transparent",
      "bg-black",
      "bg-white",
      "bg-gray-300",
      "bg-red-500",
      "bg-yellow-200",
      "bg-green-200",
      "bg-blue-200",
      "bg-purple-300",
      "bg-pink-200",
      //bold pseudo
      "font-weight: 700",
      //border styles
      "border-t-2",
      "border-b-2",
      "border-l-2",
      "border-r-2",
      "border-2",
      //border radius
      "rounded-none",
      "rounded",
      "rounded-md",
      //flex directionlg:
      "flex-row",
      "flex-row-reverse",
      "flex-col",
      "flex-col-reverse",
      //flex direction lg:
      "lg:flex-row",
      "lg:flex-row-reverse",
      "lg:flex-col",
      "lg:flex-col-reverse",
      //flex wrap
      "flex-wrap",
      "flex-wrap-reverse",
      "flex-nowrap",
      //gap
      "gap-1",
      "gap-2",
      "gap-3",
      "gap-4",
      "gap-5",
      //grid columns
      "grid-cols-1",
      "grid-cols-2",
      "grid-cols-3",
      "grid-cols-4",
      "grid-cols-5",
      //grid flow
      "grid-flow-row",
      "grid-flow-col",
      "grid-flow-row-dense",
      "grid-flow-col-dense",
      //grid rows
      "grid-rows-1",
      "grid-rows-2",
      "grid-rows-3",
      "grid-rows-4",
      "grid-rows-5",
      //headers
      "h6",
      "h5",
      "h4",
      "h3",
      "h2",
      "h1",
      //justify content
      "justify-start",
      "justify-center",
      "justify-end",
      "justify-between",
      "justify-around",
      //list decoration
      "none",
      "circle",
      "disc",
      "square",
      "decimal",
      "decimal-leading-zero",
      "lower-roman",
      "upper-roman",
      "lower-alpha",
      "upper-alpha",
      //line height
      "leading-3",
      "leading-4",
      "leading-5",
      "leading-6",
      "leading-7",
      "leading-8",
      "leading-9",
      //list style
      "ol",
      "ul",
      //padding bot
      "pb-0",
      "pb-2",
      "pb-4",
      "pb-8",
      "pb-12",
      "pb-24",
      "pb-48",
      "pb-96",
      //padding left
      "pl-0",
      "pl-2",
      "pl-4",
      "pl-8",
      "pl-12",
      "pl-24",
      "pl-48",
      "pl-96",
      //padding right
      "pr-0",
      "pr-2",
      "pr-4",
      "pr-8",
      "pr-12",
      "pr-24",
      "pr-48",
      "pr-96",
      //padding top
      "pt-0",
      "pt-2",
      "pt-4",
      "pt-8",
      "pt-12",
      "pt-24",
      "pt-48",
      "pt-96",
      //styling
      "italic",
      "underline",
      "line-through",
      "font-bold",
      //text_size
      "text-xs3",
      "text-xs2",
      "text-xs1",
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-4xl",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Roboto, Arial, sans-serif",
      serif: "Merriweather, Georgia, serif",
    },
    extend: {
      colors: {
        primary: "#672E9B",
        gray: {
          300: "#f0f0f0",
        },
      },
    },
    fontSize: {
      xs3: [".2rem", ".3rem"],
      xs2: [".3rem", ".4rem"],
      xs1: [".4rem", ".5rem"],
      xs: [".5rem", ".6rem"],
      sm: [".75rem", ".85rem"],
      tiny: [".85rem", "1rem"],
      base: ["1rem", "1.125rem"],
      lg: ["1.125rem", "1.25rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "1.875rem"],
      "3xl": ["1.875rem", "2rem"],
      "4xl": ["2.25rem", "2.5rem"],
    },
    maxWidth: {
      "10p": "10%",
      "20p": "20%",
      "30p": "30%",
      "40p": "40%",
      "50p": "50%",
      "60p": "60%",
      "70p": "70%",
      "80p": "80%",
      "90p": "90%",
      "100p": "100%",
    },
    lineHeight: {
      "leading-3": "0.6rem",
      3: "0.6rem",
      "leading-4": "0.75rem",
      4: "0.75rem",
      "leading-5": "1rem",
      5: "1rem",
      "leading-6": "1.25rem",
      6: "1.25rem",
      "leading-7": "1.5rem",
      7: "1.5rem",
      "leading-8": "2rem",
      7: "2rem",
      "leading-9": "2.5rem",
      7: "2.5rem",
    },
  },
  variants: {},
  plugins: [],
}
