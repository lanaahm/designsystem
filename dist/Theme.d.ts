import * as React from 'react';
import { componentStyles } from './_utils';

export declare const themeProps: {
  colors: {
    biru01: string;
    biru02: string;
    biru03: string;
    biru04: string;
    biru05: string;
    hitam01: string;
    hitam02: string;
    hitam03: string;
    hitam04: string;
    hitam05: string;
    putih01: string;
    putih02: string;
    putih03: string;
    putih04: string;
    putih05: string;
    orange01: string;
    orange02: string;
    orange03: string;
    orange04: string;
    orange05: string;
    merah01: string;
    merah02: string;
    merah03: string;
    merah04: string;
    merah05: string;
    hijau01: string;
    hijau02: string;
    hijau03: string;
    hijau04: string;
    hijau05: string;
    orange: string;
    orange001: string;
    merah: string;
    hijau: string;
    biru: string;
    hitam: string;
    putih: string;
    primaryText: string;
    primaryText01: string;
    white: string;
    black: string;
  };
  space: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
    space1: number;
    space2: number;
    space3: number;
    space4: number;
    space5: number;
    space6: number;
    space7: number;
  };
  fonts: string;
  shadows: {
    layer100: string;
    layer200: string;
    layer300: string;
    layer400: string;
  };
  radiuss: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  breakpoints: string[];
  mediaQueries: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  elevation: {
    level1: {
      boxShadow: string;
    };
    level2: {
      boxShadow: string;
    };
    level3: {
      boxShadow: string;
    };
    level4: {
      boxShadow: string;
    };
    level5: {
      boxShadow: string;
    };
    layer100: {
      boxShadow: string;
    };
    layer200: {
      boxShadow: string;
    };
    layer300: {
      boxShadow: string;
    };
    layer400: {
      boxShadow: string;
    };
  };
  componentStyles: {
    boxShadow: {
      1: {
        boxShadow: string;
      };
      2: {
        boxShadow: string;
      };
      3: {
        boxShadow: string;
      };
      4: {
        boxShadow: string;
      };
      5: {
        boxShadow: string;
      };
    };
    heading: {
      100: {};
      heading1: {
        fontStyle: string;
        fontWeight: number;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
      };
      heading2: {
        fontStyle: string;
        fontWeight: number;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
      };
      heading3: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: string;
      };
      heading4: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
      };
      heading5: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: string;
      };
      heading6: {
        fontStyle: string;
        fontWeight: number;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    subtitle: {
      subtitle1: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
      };
      subtitle2: {
        fontStyle: string;
        fontWeight: number;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    text: {
      body1: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: number;
        letterSpacing: string;
      };
      body2: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: number;
        letterSpacing: string;
      };
      button: {
        fontStyle: string;
        fontWeight: number;
        fontSize: number;
        lineHeight: number;
        letterSpacing: string;
        textTransform: string;
      };
      caption: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: number;
        letterSpacing: string;
      };
      overline: {
        fontStyle: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: number;
        letterSpacing: string;
        textTransform: string;
      };
    };
  };
};
export declare const Theme: React.FC;
export declare type Color = keyof typeof themeProps['colors'];
export declare type Space = keyof typeof themeProps['space'];
export declare type Elevation = keyof typeof themeProps['elevation'];
export declare type CardElevation = keyof typeof componentStyles.boxShadow;
export declare type SubtitlehScale = keyof typeof componentStyles.subtitle;
export declare type TextScale = keyof typeof componentStyles.text;
export declare type BoxShadow = keyof typeof componentStyles.boxShadow;
export declare type HeadingScale = keyof typeof componentStyles.heading;
// # sourceMappingURL=Theme.d.ts.map
