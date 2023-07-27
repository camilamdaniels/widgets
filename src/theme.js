export const tokens = {
    grey: {
        100: "#f0f0f3",
        200: "#e1e2e7",
        300: "#d1d3da",
        400: "#c2c5ce",
        500: "#b3b6c2",
        600: "#8f929b",
        700: "#6b6d74",
        800: "#48494e",
        900: "#242427",
    },
    primary: {
        // green
        100: "#a8edcb",
        200: "#93e9be",
        300: "#66d6a2",
        400: "#64c695",
        500: "#43ac78",
    },
    background: {
        light: "#64c695",
        main: "#64c695"
    }
}

// mui theme settings
export const themeSettings = {
    palette: {
        primary: {
            ...tokens.primary,
            main: tokens.primary[500],
            light: tokens.primary[400]
        },
        grey: {
            ...tokens.grey,
            main: tokens.grey[500]
        },
        background: {
            default: tokens.background.main,
            light: tokens.background.light
        }
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
        },
        h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
        },
        h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: 800,
            color: tokens.primary[100],
        },
        h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.primary[100],
        },
        h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.grey[500],
        },
        h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.grey[700],
        },
    }
}