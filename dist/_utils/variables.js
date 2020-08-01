import { transparentize } from 'polished';
const PrimaryColors = {
    biru: '#3498DB',
    hitam: '#1B1B1B',
    putih: '#FFFFFF',
    primaryText: 'rgba(20, 48, 69, 1)',
    primaryText01: 'rgba(20, 48, 69, .8)',
};
const SecondaryColors = {
    orange: '#FC642D',
    orange001: '#FB9E2E',
    merah: '#E74C3C',
    hijau: '#2ECC71',
};
const SaturationShadeColors = {
    biru01: '#2874A6',
    biru02: '#2E86C1',
    biru03: '#3498DB',
    biru04: '#5DADE2',
    biru05: '#85C1E9',
    hitam01: '#0D0D0D',
    hitam02: '#151515',
    hitam03: '#1B1B1B',
    hitam04: '#3E3E3E',
    hitam05: '#E1E1E1',
    putih01: '#FFFFFF',
    putih02: '#FFFFFF',
    putih03: '#FFFFFF',
    putih04: '#FFFFFF',
    putih05: '#FFFFFF',
    orange01: '#FF4400',
    orange02: '#FF591D',
    orange03: '#FC642D',
    orange04: '#FF895F',
    orange05: '#FFD2C1',
    merah01: '#943126',
    merah02: '#CB4335',
    merah03: '#E74C3C',
    merah04: '#EC7063',
    merah05: '#F5B7B1',
    hijau01: '#196F3D',
    hijau02: '#28B463',
    hijau03: '#2ECC71',
    hijau04: '#82E0AA',
    hijau05: '#ABEBC6',
};
export const fonts = 'Work Sans';
export const colors = Object.assign(Object.assign(Object.assign({ white: '#fff', black: '#000' }, PrimaryColors), SecondaryColors), SaturationShadeColors);
export const spaceLegacy = {
    space1: 8,
    space2: 16,
    space3: 24,
    space4: 32,
    space5: 40,
    space6: 48,
    space7: 56,
};
export const space = Object.assign(Object.assign({}, spaceLegacy), { xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 56 });
export const breakpoints = ['1024px', '1280px', '1440px', '1600px'];
export const mediaQueries = {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
};
export const radiuss = {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
};
export const shadowsLegacy = {
    layer100: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
    layer200: '0 2px 4px 1px rgba(0, 0, 0, 0.15)',
    layer300: '0 4px 6px 2px rgba(0, 0, 0, 0.15)',
    layer400: '0 6px 10px 2px rgba(0, 0, 0, 0.15)',
};
export const shadows = Object.assign({}, shadowsLegacy);
export const elevationLegacy = {
    layer100: {
        boxShadow: 'layer100',
    },
    layer200: {
        boxShadow: 'layer200',
    },
    layer300: {
        boxShadow: 'layer300',
    },
    layer400: {
        boxShadow: 'layer400',
    },
};
const shadowColor = transparentize(0.85, colors.hitam04);
export const elevation = Object.assign(Object.assign({}, elevationLegacy), { level1: {
        boxShadow: 'none',
    }, level2: {
        boxShadow: `0px 2px 6px ${shadowColor};`,
    }, level3: {
        boxShadow: `0px 6px 12px ${shadowColor};`,
    }, level4: {
        boxShadow: `0px 12px 24px ${shadowColor};`,
    }, level5: {
        boxShadow: `0px 24px 48px ${shadowColor};`,
    } });
//# sourceMappingURL=variables.js.map