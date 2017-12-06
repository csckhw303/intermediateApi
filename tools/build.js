/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';
process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats) =>{

console.log('Generating minified bundle for production via webpack, this will take moment '.blue);

  if (err) {
      console.log(err.bold.red);
      return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
      return jsonStats.errors.map(error => console.log(error.red));
  }
  
  console.log(`webpack stats: ${stats}`);
  
  console.log('your app has been comiled in production mode and written to /dist'.green); 

  return 0;
  
});