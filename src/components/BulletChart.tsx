// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bullet
import { ResponsiveBullet } from '@nivo/bullet'

const data = [
  {
    "id": "temp.",
    "ranges": [
      126,
      6,
      98,
      0,
      140
    ],
    "measures": [
      115
    ],
    "markers": [
      135
    ]
  },
  {
    "id": "power",
    "ranges": [
      1.3880138547921796,
      0.42492138591166284,
      1.0283999312559615,
      0,
      2
    ],
    "measures": [
      0.012954240511213662,
      0.014765396301880784
    ],
    "markers": [
      1.8636070449372935
    ]
  },
  {
    "id": "volume",
    "ranges": [
      52,
      0,
      11,
      3,
      23,
      36,
      0,
      60
    ],
    "measures": [
      37
    ],
    "markers": [
      47
    ]
  },
  {
    "id": "cost",
    "ranges": [
      128577,
      114893,
      98579,
      0,
      500000
    ],
    "measures": [
      75043,
      272018
    ],
    "markers": [
      468997
    ]
  },
  {
    "id": "revenue",
    "ranges": [
      7,
      1,
      3,
      0,
      9
    ],
    "measures": [
      3
    ],
    "markers": [
      5.450197868349423,
      6.434782548291584
    ]
  }
]

const BulletChart = () => (
    <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
    />
)

export default BulletChart;
