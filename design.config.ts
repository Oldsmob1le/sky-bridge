export const screens = {
    laptop: '1536px',
    tablet: '1100px',
    'tablet-s': '769px',
    mobile: '577px'
}

export const indents = {
    'nano': '2px',
    'micro': '4px',
    'xs': '8px',
    's': '12px',
    'm': '16px',
    'l': '20px',
    'xl': '24px',
    'grid-tablet': '30px',
    '2xl': '32px',
    '3xl': '40px',
    'tablet-margin': '47px',
    '4xl': '56px',
    '5xl': '96px',
    '6xl': '112px',
    'section': '212px',
    '7xl': '288px',
    '8xl': '375px',
}

export const colors = {
    black: '#2A2D32',
    'black-background': '#1C1D20',
    white: '#FFFFFF',
    'gray-1': '#F4F4F7',
    'gray-2': '#E1E2EA',
    'gray-3': '#89909A',
    'gray-3-lines': '#EDEDF4',
    'gray-text': '#838992',
    'gray-lines-dark-back': '#5F6670',
    'gray-hover-button': '#C1C3D0',
    graffit: '#2A2B31',
    'gray-disabled': '#DADBE2',
    accent: '#2777ED',
    hover: '#0146AC',
    error: '#F13737',
    active: '#4C9954',
    button: '#C1C1C1',
    'hover-green': '#2C6D33',
    'line-compare': '#263B5A',
    /** main **/
    'main-gray': '#89909A',
    'main-lable-sale-1': '#F16437',
    'main-lable-sale-4': '#F13737'
}

export const typography: Record<string, [fontSize: string, lineHeight: string]> = {
    /** Display **/
    'display-1': ['24px', '120%'],
    'display-2': ['32px', '120%'],
    'display-3': ['48px', '110%'],
    'display-4': ['56px', '110%'],
    /** Header **/
    'h1': ['20px', '130%'],
    'h2': ['24px', '28px'],
    /** Subheader **/
    'sub-h': ['10px', '12px'],
    'sub-h1': ['12px', '16px'],
    'sub-h2': ['14px', '18px'],
    'sub-h3': ['16px', '20px'],
    'sub-h4': ['18px', '24px'],
    /** Text **/
    'b1': ['12px', '16px'],
    'b2': ['14px', '140%'],
    'b3': ['16px', '140%'] // default for body
}

export const radii = {
    'xxs': '4px',
    'xs': '8px',
    's': '12px',
    'sr': '18px',
    'm': '20px',
    'l': '24px',
    'full': '50%'
}


export const ICONS_PATH = '/icons' // Resolve to https://.../public/{ICONS_PATH}

export enum icons {
    WHATSAPP = 'whatsapp',
    HANDSET = 'handset',
    CHEVRON_UP = 'chevron-up',
    ARROW_RIGHT = 'arrow-right'
}

export const iconsFilename: Record<icons, string> = {
    [icons.WHATSAPP]: 'Whatsapp.svg',
    [icons.HANDSET]: 'Handset.svg',
    [icons.CHEVRON_UP]: 'chevron-up.svg',
    [icons.ARROW_RIGHT]: 'arrow-right.svg'
}

export const iconsMask = Object.fromEntries(
    Object.entries(iconsFilename).map(([k, v]) => [k, `[mask-image:url("${ICONS_PATH}/${v}")]`])
) as Record<icons, string>