import * as React from 'react';
import { Heading, Text, Paragraph } from '.';
import { ComponentBlock, SystemWrapper, SystemBlock } from '../../_utils/storybook';
import { Box } from '../../_foundations';
import { Stack } from '../common';
const readme = require('./README.md');
export default {
    title: 'Core|Typography',
    component: [Text, Heading, Paragraph],
    decorators: [SystemWrapper],
    parameters: {
        notes: { markdown: readme },
        jsx: { skip: 2 },
    },
};
export const Example = () => (React.createElement(SystemBlock, null,
    React.createElement(Stack, { spacing: "xl" },
        React.createElement(ComponentBlock, { title: "Heading 1", scaleTitle: "heading6" },
            React.createElement(Heading, { scale: "heading1" }, "Almost before we knew it, we had left the ground")),
        React.createElement(ComponentBlock, { title: "Heading 2", scaleTitle: "heading6" },
            React.createElement(Heading, { scale: "heading2" }, "Almost before we knew it, we had left the ground")),
        React.createElement(ComponentBlock, { title: "Heading 3", scaleTitle: "heading6" },
            React.createElement(Heading, { scale: "heading3" }, "Almost before we knew it, we had left the ground")),
        React.createElement(ComponentBlock, { title: "Heading 4", scaleTitle: "heading6" },
            React.createElement(Heading, { scale: "heading4" }, "Almost before we knew it, we had left the ground")),
        React.createElement(ComponentBlock, { title: "Heading 5", scaleTitle: "heading6" },
            React.createElement(Heading, { scale: "heading5" }, "Almost before we knew it, we had left the ground")),
        React.createElement(ComponentBlock, { title: "Heading 6", scaleTitle: "heading6" },
            React.createElement(Heading, { scale: "heading6" }, "Almost before we knew it, we had left the ground")),
        React.createElement(ComponentBlock, { title: "Subtitle 1", scaleTitle: "heading6" },
            React.createElement(Text, { scale: "body1" }, "Almost before we knew it, we had left the ground")))));
export const Skelaton = () => (React.createElement(SystemBlock, { title: "BCC Design System - Typography", subtitle: "" },
    React.createElement(Stack, { spacing: "xl" },
        React.createElement(Box, { display: "grid", gridTemplateColumns: "2fr 1fr" },
            React.createElement(Stack, { spacing: "sm" },
                React.createElement(Paragraph, { className: "skeleton w15" }, "Open sans merupakan humanist sans-serif typeface didesign oleh Steve Matteson setela diberi tugas oleh google dan dirilis pada tahun 2011. Font ini merupakan font sebelumnya yaitu Droid sans, yang didesign untuk digunakan pada android"),
                React.createElement(Paragraph, { className: "skeleton" }, "Open sans umum digunakan pada halaman web, browser (digunakan mozilla sampai tahun 2019), dekstop app (Telegram). Penggunaan open sans dioptimalkan untuk bacaan dengan blbalbala"),
                React.createElement(Paragraph, { className: "skeleton" }, "Open sans sebagai sans-serif dengan sifat tegas dan moern dipilih sesuai dari init dari hasil research yang didapatkan yaitu kekeluargaan dan visioner segabagai ciri khas dan pandangan orang lain terpadahp BCC FILKOM."),
                React.createElement(Paragraph, { className: "skeleton" },
                    "Pros",
                    React.createElement("br", null),
                    "-tersedia banyak variasi",
                    React.createElement("br", null),
                    "-mudah dibaca bagi berbagai kalangan (modern but ortu suruh baca ok)",
                    React.createElement("br", null),
                    "-umum dan sering dipakai media, website, cetak, design, dll",
                    React.createElement("br", null),
                    "-bcc sans serif"),
                React.createElement(Paragraph, { className: "skeleton" },
                    "Cons",
                    React.createElement("br", null),
                    "-tidak tersedia versi thin and book?",
                    React.createElement("br", null),
                    "-karena umum dan sering dipakai tadi jdnya malah kyk mainstream?"))))));
Skelaton.story = {
    parameters: {
        notes: { markdown: false },
        jsx: { disable: true },
    },
};
//# sourceMappingURL=index.stories.js.map