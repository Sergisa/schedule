const Material = {
    colors: {
        red: {
            '50': {hex: '#FFEBEE'},
            '100': {hex: '#FFCDD2'},
            '200': {hex: '#EF9A9A'},
            '300': {hex: '#E57373'},
            '400': {hex: '#EF5350'},
            '500': {hex: '#F44336'},
            '600': {hex: '#E53935'},
            '700': {hex: '#D32F2F'},
            '800': {hex: '#C62828'},
            '900': {hex: '#B71C1C'},
            'A100': {hex: '#FF8A80'},
            'A200': {hex: '#FF5252'},
            'A400': {hex: '#FF1744'},
            'A700': {hex: '#D50000'}
        },
        pink: {
            '50': {hex: '#FCE4EC'},
            '100': {hex: '#F8BBD0'},
            '200': {hex: '#F48FB1'},
            '300': {hex: '#F06292'},
            '400': {hex: '#EC407A'},
            '500': {hex: '#E91E63'},
            '600': {hex: '#D81B60'},
            '700': {hex: '#C2185B'},
            '800': {hex: '#AD1457'},
            '900': {hex: '#880E4F'},
            'A100': {hex: '#FF80AB'},
            'A200': {hex: '#FF4081'},
            'A400': {hex: '#F50057'},
            'A700': {hex: '#C51162'}
        },
        purple: {
            '50': {hex: '#F3E5F5'},
            '100': {hex: '#E1BEE7'},
            '200': {hex: '#CE93D8'},
            '300': {hex: '#BA68C8'},
            '400': {hex: '#AB47BC'},
            '500': {hex: '#9C27B0'},
            '600': {hex: '#8E24AA'},
            '700': {hex: '#7B1FA2'},
            '800': {hex: '#6A1B9A'},
            '900': {hex: '#4A148C'},
            'A100': {hex: '#EA80FC'},
            'A200': {hex: '#E040FB'},
            'A400': {hex: '#D500F9'},
            'A700': {hex: '#AA00FF'}
        },
        deepPurple: {
            '50': {hex: '#EDE7F6'},
            '100': {hex: '#D1C4E9'},
            '200': {hex: '#B39DDB'},
            '300': {hex: '#9575CD'},
            '400': {hex: '#7E57C2'},
            '500': {hex: '#673AB7'},
            '600': {hex: '#5E35B1'},
            '700': {hex: '#512DA8'},
            '800': {hex: '#4527A0'},
            '900': {hex: '#311B92'},
            'A100': {hex: '#B388FF'},
            'A200': {hex: '#7C4DFF'},
            'A400': {hex: '#651FFF'},
            'A700': {hex: '#6200EA'}
        },
        indigo: {
            '50': {hex: '#E8EAF6'},
            '100': {hex: '#C5CAE9'},
            '200': {hex: '#9FA8DA'},
            '300': {hex: '#7986CB'},
            '400': {hex: '#5C6BC0'},
            '500': {hex: '#3F51B5'},
            '600': {hex: '#3949AB'},
            '700': {hex: '#303F9F'},
            '800': {hex: '#283593'},
            '900': {hex: '#1A237E'},
            'A100': {hex: '#8C9EFF'},
            'A200': {hex: '#536DFE'},
            'A400': {hex: '#3D5AFE'},
            'A700': {hex: '#304FFE'}
        },
        blue: {
            '50': {hex: '#E3F2FD'},
            '100': {hex: '#BBDEFB'},
            '200': {hex: '#90CAF9'},
            '300': {hex: '#64B5F6'},
            '400': {hex: '#42A5F5'},
            '500': {hex: '#2196F3'},
            '600': {hex: '#1E88E5'},
            '700': {hex: '#1976D2'},
            '800': {hex: '#1565C0'},
            '900': {hex: '#0D47A1'},
            'A100': {hex: '#82B1FF'},
            'A200': {hex: '#448AFF'},
            'A400': {hex: '#2979FF'},
            'A700': {hex: '#2962FF'}
        },
        lightBlue: {
            '50': {hex: '#E1F5FE'},
            '100': {hex: '#B3E5FC'},
            '200': {hex: '#81D4FA'},
            '300': {hex: '#4FC3F7'},
            '400': {hex: '#29B6F6'},
            '500': {hex: '#03A9F4'},
            '600': {hex: '#039BE5'},
            '700': {hex: '#0288D1'},
            '800': {hex: '#0277BD'},
            '900': {hex: '#01579B'},
            'A100': {hex: '#80D8FF'},
            'A200': {hex: '#40C4FF'},
            'A400': {hex: '#00B0FF'},
            'A700': {hex: '#0091EA'}
        },
        cyan: {
            '50': {hex: '#E0F7FA'},
            '100': {hex: '#B2EBF2'},
            '200': {hex: '#80DEEA'},
            '300': {hex: '#4DD0E1'},
            '400': {hex: '#26C6DA'},
            '500': {hex: '#00BCD4'},
            '600': {hex: '#00ACC1'},
            '700': {hex: '#0097A7'},
            '800': {hex: '#00838F'},
            '900': {hex: '#006064'},
            'A100': {hex: '#84FFFF'},
            'A200': {hex: '#18FFFF'},
            'A400': {hex: '#00E5FF'},
            'A700': {hex: '#00B8D4'}
        },
        teal: {
            '50': {hex: '#E0F2F1'},
            '100': {hex: '#B2DFDB'},
            '200': {hex: '#80CBC4'},
            '300': {hex: '#4DB6AC'},
            '400': {hex: '#26A69A'},
            '500': {hex: '#009688'},
            '600': {hex: '#00897B'},
            '700': {hex: '#00796B'},
            '800': {hex: '#00695C'},
            '900': {hex: '#004D40'},
            'A100': {hex: '#A7FFEB'},
            'A200': {hex: '#64FFDA'},
            'A400': {hex: '#1DE9B6'},
            'A700': {hex: '#00BFA5'}
        },
        green: {
            '50': {hex: '#E8F5E9'},
            '100': {hex: '#C8E6C9'},
            '200': {hex: '#A5D6A7'},
            '300': {hex: '#81C784'},
            '400': {hex: '#66BB6A'},
            '500': {hex: '#4CAF50'},
            '600': {hex: '#43A047'},
            '700': {hex: '#388E3C'},
            '800': {hex: '#2E7D32'},
            '900': {hex: '#1B5E20'},
            'A100': {hex: '#B9F6CA'},
            'A200': {hex: '#69F0AE'},
            'A400': {hex: '#00E676'},
            'A700': {hex: '#00C853'}
        },
        lightGreen: {
            '50': {hex: '#F1F8E9'},
            '100': {hex: '#DCEDC8'},
            '200': {hex: '#C5E1A5'},
            '300': {hex: '#AED581'},
            '400': {hex: '#9CCC65'},
            '500': {hex: '#8BC34A'},
            '600': {hex: '#7CB342'},
            '700': {hex: '#689F38'},
            '800': {hex: '#558B2F'},
            '900': {hex: '#33691E'},
            'A100': {hex: '#CCFF90'},
            'A200': {hex: '#B2FF59'},
            'A400': {hex: '#76FF03'},
            'A700': {hex: '#64DD17'}
        },
        lime: {
            '50': {hex: '#F9FBE7'},
            '100': {hex: '#F0F4C3'},
            '200': {hex: '#E6EE9C'},
            '300': {hex: '#DCE775'},
            '400': {hex: '#D4E157'},
            '500': {hex: '#CDDC39'},
            '600': {hex: '#C0CA33'},
            '700': {hex: '#AFB42B'},
            '800': {hex: '#9E9D24'},
            '900': {hex: '#827717'},
            'A100': {hex: '#F4FF81'},
            'A200': {hex: '#EEFF41'},
            'A400': {hex: '#C6FF00'},
            'A700': {hex: '#AEEA00'}
        },
        yellow: {
            '50': {hex: '#FFFDE7'},
            '100': {hex: '#FFF9C4'},
            '200': {hex: '#FFF59D'},
            '300': {hex: '#FFF176'},
            '400': {hex: '#FFEE58'},
            '500': {hex: '#FFEB3B'},
            '600': {hex: '#FDD835'},
            '700': {hex: '#FBC02D'},
            '800': {hex: '#F9A825'},
            '900': {hex: '#F57F17'},
            'A100': {hex: '#FFFF8D'},
            'A200': {hex: '#FFFF00'},
            'A400': {hex: '#FFEA00'},
            'A700': {hex: '#FFD600'}
        },
        amber: {
            '50': {hex: '#FFF8E1'},
            '100': {hex: '#FFECB3'},
            '200': {hex: '#FFE082'},
            '300': {hex: '#FFD54F'},
            '400': {hex: '#FFCA28'},
            '500': {hex: '#FFC107'},
            '600': {hex: '#FFB300'},
            '700': {hex: '#FFA000'},
            '800': {hex: '#FF8F00'},
            '900': {hex: '#FF6F00'},
            'A100': {hex: '#FFE57F'},
            'A200': {hex: '#FFD740'},
            'A400': {hex: '#FFC400'},
            'A700': {hex: '#FFAB00'}
        },
        orange: {
            '50': {hex: '#FFF3E0'},
            '100': {hex: '#FFE0B2'},
            '200': {hex: '#FFCC80'},
            '300': {hex: '#FFB74D'},
            '400': {hex: '#FFA726'},
            '500': {hex: '#FF9800'},
            '600': {hex: '#FB8C00'},
            '700': {hex: '#F57C00'},
            '800': {hex: '#EF6C00'},
            '900': {hex: '#E65100'},
            'A100': {hex: '#FFD180'},
            'A200': {hex: '#FFAB40'},
            'A400': {hex: '#FF9100'},
            'A700': {hex: '#FF6D00'}
        },
        deepOrange: {
            '50': {hex: '#FBE9E7'},
            '100': {hex: '#FFCCBC'},
            '200': {hex: '#FFAB91'},
            '300': {hex: '#FF8A65'},
            '400': {hex: '#FF7043'},
            '500': {hex: '#FF5722'},
            '600': {hex: '#F4511E'},
            '700': {hex: '#E64A19'},
            '800': {hex: '#D84315'},
            '900': {hex: '#BF360C'},
            'A100': {hex: '#FF9E80'},
            'A200': {hex: '#FF6E40'},
            'A400': {hex: '#FF3D00'},
            'A700': {hex: '#DD2C00'}
        },
        brown: {
            '50': {hex: '#EFEBE9'},
            '100': {hex: '#D7CCC8'},
            '200': {hex: '#BCAAA4'},
            '300': {hex: '#A1887F'},
            '400': {hex: '#8D6E63'},
            '500': {hex: '#795548'},
            '600': {hex: '#6D4C41'},
            '700': {hex: '#5D4037'},
            '800': {hex: '#4E342E'},
            '900': {hex: '#3E2723'}
        },
        grey: {
            '50': {hex: '#FAFAFA'},
            '100': {hex: '#F5F5F5'},
            '200': {hex: '#EEEEEE'},
            '300': {hex: '#E0E0E0'},
            '400': {hex: '#BDBDBD'},
            '500': {hex: '#9E9E9E'},
            '600': {hex: '#757575'},
            '700': {hex: '#616161'},
            '800': {hex: '#424242'},
            '900': {hex: '#212121'}
        },
        blueGrey: {
            '50': {hex: '#ECEFF1'},
            '100': {hex: '#CFD8DC'},
            '200': {hex: '#B0BEC5'},
            '300': {hex: '#90A4AE'},
            '400': {hex: '#78909C'},
            '500': {hex: '#607D8B'},
            '600': {hex: '#546E7A'},
            '700': {hex: '#455A64'},
            '800': {hex: '#37474F'},
            '900': {hex: '#263238'}
        }
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getDistance(point1, point2) {
    return Math.abs(point1.r - point2.r) + Math.abs(point1.g - point2.g) + Math.abs(point1.b - point2.b)
    //return Math.sqrt(Math.pow(point1.r - point2.r, 2) + Math.pow(point1.g - point2.g, 2) + Math.pow(point1.b - point2.b, 2))
}

function findNearest(hexColor) {
    let min = 10000;
    let color;
    let colorIntensity;
    let name;
    for (let colorName in Material.colors) {
        for (let intensityValue in Material.colors[colorName]) {
            const d = getDistance(hexToRgb(Material.colors[colorName][intensityValue].hex), hexToRgb(hexColor));
            if (d < min) {
                min = d;
                color = Material.colors[colorName][intensityValue].hex;
                name = colorName
                colorIntensity = intensityValue
            }
        }
    }
    return {
        distance: min,
        color,
        name,
        colorIntensity
    };
}
