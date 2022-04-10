import { defineComponent, App } from 'vue';
import { WordCloud, WordCloudOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type WordCloudChartProps = Writeable<
  Omit<BaseChartProps<WordCloudOptions>, 'chart' | 'data'> & WordCloudOptions
>;

export const WordCloudChart = defineComponent<WordCloudChartProps>({
  name: 'WordCloudChart',
  setup: (props, { attrs }) => {
    return () => <BaseChart chart={WordCloud} {...props} {...attrs} />;
  }
});

WordCloudChart.install = (app: App) => {
  app.component(WordCloudChart.name, WordCloudChart);
};
