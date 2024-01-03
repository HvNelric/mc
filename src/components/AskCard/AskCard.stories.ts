import type { Meta, StoryObj } from '@storybook/react';

import AskCard from './AskCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Cards/AskCard',
  component: AskCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //stags: ['autodocs']
} satisfies Meta<typeof AskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Result: Story = {
  args: {
    title: "Campagne tendance du troisième trimestre 2023. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",   
    resultAskNumber: 24,
    resultTerminated: new Date()
  }
};

export const Question: Story = {
  args: {
    cardType: "question",
    title: "Campagne tendance du troisième trimestre 2023",   
    bottomText: "champs texte libre",
    href: "https://www.intax.io",
    tagsArray: ['économie', 'internet', 'technologie', 'science & vie']
  }
};

export const Response: Story = {
  args: {
    cardType: "response",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",   
    bottomText: "champs libre texte",
    tagsArray: ['économie', 'internet', 'technologie', 'science & vie']
  }
};