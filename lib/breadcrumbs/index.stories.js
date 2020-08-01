import * as React from 'react';
import { SystemWrapper, SystemBlock } from '../_utils/storybook';
import { Stack } from '../_foundations/common';
import { Breadcrumbs, BreadcrumbItem } from '.';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
const readme = require('./README.md');
export default {
    title: 'Component|Breadcrumbs',
    component: [Breadcrumbs, BreadcrumbItem],
    decorators: [SystemWrapper, withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};
const groupItem = 'Item';
const groupLastItem = 'Last Item';
const groupSeparator = 'Separator';
export const Example = () => (React.createElement(SystemBlock, { title: "BCC Design System - Breadcrumbs" },
    React.createElement(Stack, { spacing: "xl" },
        React.createElement(Breadcrumbs, { separator: select('Separator', { '>': '>', '/': '/', '|': '|' }, '>', groupSeparator) },
            React.createElement(BreadcrumbItem, null, text('Item - 1', 'BCC', groupItem)),
            React.createElement(BreadcrumbItem, null, text('Item - 2', 'Design System', groupItem)),
            React.createElement(BreadcrumbItem, { lastItem: boolean('Last Item', true, groupLastItem) }, text('Item - 3', 'Tabs', groupItem))))));
export const Skelaton = () => (React.createElement(SystemBlock, { title: "BCC Design System - Breadcrumbs" },
    React.createElement(Stack, { spacing: "xl" },
        React.createElement(Breadcrumbs, { separator: "/" },
            React.createElement(BreadcrumbItem, { className: "skeleton", lastItem: true }, "BCC"),
            React.createElement(BreadcrumbItem, { className: "skeleton", lastItem: true }, "Design System"),
            React.createElement(BreadcrumbItem, { className: "skeleton", lastItem: true }, "Tabs")))));
//# sourceMappingURL=index.stories.js.map