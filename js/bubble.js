const colors = {
  language: '#16A085',
  datastore: '#F67280',
  framework: '#33658A',
  tool: '#F6AE2D'
};

const typeToIcon = {
  python: {content: '\uf3e2', family: 'brands'},
  javascript: {content: '\uf3b9', family: 'brands'},
  database: {content: '\uf1c0', family: 'free'},
  nodejs: {content: '\uf3d3', family: 'brands'},
  flask: {content: '\uf0c3', family: 'free'},
  snowflake: {content: '\uf2dc', family: 'free'},
  react: {content: '\uf41b', family: 'brands'},
  docker: {content: '\uf395', family: 'brands'},
  test: {content: '\uf492', family: 'free'},
  sketch: {content: '\uf7c6', family: 'brands'},
  css: {content: '\uf38b', family: 'brands'},
  server: {content: '\uf233', family: 'free'},
  elixir: {content: '\uf0c3', family: 'free'},
};

const data = [
  {
    name: 'Python',
    score: 10,
    type: 'language',
    icon: 'python',
  },
  {
    name: 'JavaScript',
    score: 10,
    type: 'language',
    icon: 'javascript',
  },
  {
    name: 'Elixir',
    score: 7,
    type: 'language',
    icon: 'elixir',
  },
  {
    name: 'PostgreSQL',
    score: 10,
    type: 'datastore',
    icon: 'database',
  },
  {
    name: 'Redis',
    score: 9,
    type: 'datastore',
    icon: 'database',
  },
  {
    name: 'ElasticSearch',
    score: 6,
    type: 'datastore',
    icon: 'database',
  },
  {
    name: 'Snowflake',
    score: 3,
    type: 'datastore',
    icon: 'snowflake',
  },
  {
    name: 'React',
    score: 8,
    type: 'framework',
    icon: 'react',
  },
  {
    name: 'Flask',
    score: 6,
    type: 'framework',
    icon: 'flask',
  },
  {
    name: 'FastAPI',
    score: 2,
    type: 'framework'
  },
  {
    name: 'Node',
    score: 7,
    type: 'framework',
    icon: 'nodejs',
  },
  {
    name: 'CSS',
    score: 8,
    type: 'language',
    icon: 'css',
  },
  {
    name: 'Sketch',
    score: 3,
    type: 'tool',
    icon: 'sketch',
  },
  {
    name: 'k8s',
    score: 4,
    type: 'tool',
    icon: 'server',
  },
  {
    name: 'AWS',
    score: 3,
    type: 'tool',
    icon: 'server',
  },
  {
    name: 'GCP',
    score: 7,
    type: 'tool',
    icon: 'server',
  },
  {
    name: 'Docker',
    score: 7,
    type: 'tool',
    icon: 'docker',
  },
  {
    name: 'C++',
    score: 1,
    type: 'language'
  },
  {
    name: 'Go',
    score: 1,
    type: 'language'
  }
];

const width = 600;
const height = 600;

const generateChart = (data) => {
  const bubble = (data) =>
    d3.pack().size([width, height]).padding(2)(
      d3
        .hierarchy({ children: data.sort((x, y) => x.score < y.score) })
        .sum((d) => d.score)
    );

  const svg = d3
    .select('#bubble-boy')
    .style('width', width)
    .style('height', height);

  const root = bubble(data);
 
  const node = svg
    .selectAll()
    .data(root.children)
    .enter()
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const circle = node
    .append('circle')
    .style('fill', (d) => colors[d.data.type]);

  const icon = node
    .append('text')
    .attr('dy', -15)
    .attr('class', (d) =>
      typeToIcon[d.data.icon]?.family == 'brands'
        ? 'tech-icon brands-icon'
        : 'tech-icon free-icon'
    )
    .attr('font-size', (d) => `${100 / (11 - d.data.score) + 130}%`)
    .style('fill', (d) => tinycolor(colors[d.data.type]).darken(20).toString())
    .text((d) => typeToIcon[d.data.icon]?.content);

  const label = node
    .append('text')
    .attr('class', 'tech-label')
    .attr('dy', (d) => (d.data.icon ? 20 : 0))
    .style('fill', (d) => tinycolor(colors[d.data.type]).darken(20).toString())
    .text((d) => d.data.name);

  node
    .transition()
    .ease(d3.easeExpInOut)
    .duration(1000)
    .attr('transform', (d) => `translate(${d.x}, ${d.y})`);

  circle
    .transition()
    .ease(d3.easeExpInOut)
    .duration(1000)
    .attr('r', (d) => d.r);

  label
    .transition()
    .delay(700)
    .ease(d3.easeExpInOut)
    .duration(1000)
    .style('opacity', 1);

  icon
    .transition()
    .delay(700)
    .ease(d3.easeExpInOut)
    .duration(1000)
    .style('opacity', 1);
};

(() => {
  generateChart(data);
})();
