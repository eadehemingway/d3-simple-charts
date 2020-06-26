import { Home } from './Home'
import { Donut } from './Donut'
import { ThinDonut } from './ThinDonut'
import { ForceWithLinks } from './ForceWithLinks'
import { BarChart } from './BarChart'
import { LineChart } from './LineChart'
import { MapChart } from './MapChart/MapChart'
import { TreeChart } from './TreeChart'
import { Matrix } from './Matrix'
import { Sankey } from './Sankey'
import { MouseGame } from './MouseGame'
import { CirclePacking } from './CirclePacking'
import { MouseGame2 } from './MouseGame2'
export const chartList = [
  {
    name: 'Donut',
    endpoint: '/donut',
    component: Donut,
  },
  {
    name: 'Transitioning donut',
    endpoint: '/thindonut',
    component: ThinDonut,
  },
  {
    name: 'Force with links',
    endpoint: '/forcewithlinks',
    component: ForceWithLinks,
  },
  {
    name: 'Bar chart',
    endpoint: '/barchart',
    component: BarChart,
  },
  {
    name: 'Line chart',
    endpoint: '/linechart',
    component: LineChart,
  },
  {
    name: 'Map chart',
    endpoint: '/map',
    component: MapChart,
  },
  {
    name: 'Tree chart',
    endpoint: '/tree',
    component: TreeChart,
  },
  {
    name: 'Matrix',
    endpoint: '/matrix',
    component: Matrix,
  },
  {
    name: 'Sankey',
    endpoint: '/sankey',
    component: Sankey,
  },
  {
    name: 'Mouse game',
    endpoint: '/mousegame',
    component: MouseGame,
  },
  {
    name: 'Mouse game 2',
    endpoint: '/mousegame-2',
    component: MouseGame2,
  },
  {
    name: 'Circle packing',
    endpoint: '/circle-packing',
    component: CirclePacking,
  },
]
