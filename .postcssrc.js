import postcssRtl from 'postcss-rtl';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const plugins = [
  autoprefixer(),
  tailwindcss(),
];

if (process.env.QUASAR_RTL) {
  plugins.push(
    postcssRtl({})
  );
}

export default {
  plugins,
};
