/// <reference types="react" />
declare const _default: {
    title: string;
    component: (import("styled-components").StyledComponent<"h2", any, import(".").HeadingProps, never> | import("styled-components").StyledComponent<"span", any, import(".").TextProps, never> | import("styled-components").StyledComponent<"p", any, import(".").ParagraphProps, never>)[];
    decorators: import("@storybook/addons").DecoratorFunction<import("@storybook/react/dist/client/preview/types").StoryFnReactReturnType>[];
    parameters: {
        notes: {
            markdown: any;
        };
        jsx: {
            skip: number;
        };
    };
};
export default _default;
export declare const Example: () => JSX.Element;
export declare const Skelaton: {
    (): JSX.Element;
    story: {
        parameters: {
            notes: {
                markdown: boolean;
            };
            jsx: {
                disable: boolean;
            };
        };
    };
};
//# sourceMappingURL=index.stories.d.ts.map