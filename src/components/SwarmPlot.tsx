import { ResponsiveSwarmPlot } from '@nivo/swarmplot'

const data =[
  {
    "id": "0.0",
    "group": "group A",
    "price": 372,
    "volume": 14
  },
  {
    "id": "0.1",
    "group": "group A",
    "price": 144,
    "volume": 20
  },
  {
    "id": "0.2",
    "group": "group A",
    "price": 269,
    "volume": 16
  },
  {
    "id": "0.3",
    "group": "group A",
    "price": 0,
    "volume": 17
  },
  {
    "id": "0.4",
    "group": "group A",
    "price": 16,
    "volume": 5
  },
  {
    "id": "0.5",
    "group": "group A",
    "price": 126,
    "volume": 9
  },
  {
    "id": "0.6",
    "group": "group A",
    "price": 391,
    "volume": 16
  },
  {
    "id": "0.7",
    "group": "group A",
    "price": 118,
    "volume": 11
  },
  {
    "id": "0.8",
    "group": "group A",
    "price": 351,
    "volume": 15
  },
  {
    "id": "0.9",
    "group": "group A",
    "price": 94,
    "volume": 17
  },
  {
    "id": "0.10",
    "group": "group A",
    "price": 133,
    "volume": 9
  },
  {
    "id": "0.11",
    "group": "group A",
    "price": 221,
    "volume": 6
  },
  {
    "id": "0.12",
    "group": "group A",
    "price": 376,
    "volume": 6
  },
  {
    "id": "0.13",
    "group": "group A",
    "price": 28,
    "volume": 20
  },
  {
    "id": "0.14",
    "group": "group A",
    "price": 484,
    "volume": 5
  },
  {
    "id": "0.15",
    "group": "group A",
    "price": 256,
    "volume": 18
  },
  {
    "id": "0.16",
    "group": "group A",
    "price": 389,
    "volume": 18
  },
  {
    "id": "0.17",
    "group": "group A",
    "price": 222,
    "volume": 16
  },
  {
    "id": "0.18",
    "group": "group A",
    "price": 171,
    "volume": 15
  },
  {
    "id": "0.19",
    "group": "group A",
    "price": 292,
    "volume": 19
  },
  {
    "id": "0.20",
    "group": "group A",
    "price": 485,
    "volume": 9
  },
  {
    "id": "0.21",
    "group": "group A",
    "price": 345,
    "volume": 14
  },
  {
    "id": "0.22",
    "group": "group A",
    "price": 97,
    "volume": 18
  },
  {
    "id": "0.23",
    "group": "group A",
    "price": 251,
    "volume": 20
  },
  {
    "id": "0.24",
    "group": "group A",
    "price": 423,
    "volume": 19
  },
  {
    "id": "0.25",
    "group": "group A",
    "price": 62,
    "volume": 10
  },
  {
    "id": "0.26",
    "group": "group A",
    "price": 249,
    "volume": 17
  },
  {
    "id": "0.27",
    "group": "group A",
    "price": 363,
    "volume": 6
  },
  {
    "id": "0.28",
    "group": "group A",
    "price": 469,
    "volume": 6
  },
  {
    "id": "0.29",
    "group": "group A",
    "price": 337,
    "volume": 19
  },
  {
    "id": "0.30",
    "group": "group A",
    "price": 402,
    "volume": 20
  },
  {
    "id": "0.31",
    "group": "group A",
    "price": 194,
    "volume": 13
  },
  {
    "id": "0.32",
    "group": "group A",
    "price": 217,
    "volume": 20
  },
  {
    "id": "0.33",
    "group": "group A",
    "price": 298,
    "volume": 4
  },
  {
    "id": "0.34",
    "group": "group A",
    "price": 397,
    "volume": 20
  },
  {
    "id": "0.35",
    "group": "group A",
    "price": 81,
    "volume": 12
  },
  {
    "id": "0.36",
    "group": "group A",
    "price": 84,
    "volume": 4
  },
  {
    "id": "0.37",
    "group": "group A",
    "price": 48,
    "volume": 8
  },
  {
    "id": "0.38",
    "group": "group A",
    "price": 182,
    "volume": 4
  },
  {
    "id": "0.39",
    "group": "group A",
    "price": 77,
    "volume": 6
  },
  {
    "id": "0.40",
    "group": "group A",
    "price": 78,
    "volume": 10
  },
  {
    "id": "0.41",
    "group": "group A",
    "price": 61,
    "volume": 19
  },
  {
    "id": "0.42",
    "group": "group A",
    "price": 201,
    "volume": 7
  },
  {
    "id": "0.43",
    "group": "group A",
    "price": 409,
    "volume": 12
  },
  {
    "id": "0.44",
    "group": "group A",
    "price": 440,
    "volume": 20
  },
  {
    "id": "0.45",
    "group": "group A",
    "price": 54,
    "volume": 5
  },
  {
    "id": "0.46",
    "group": "group A",
    "price": 54,
    "volume": 16
  },
  {
    "id": "0.47",
    "group": "group A",
    "price": 35,
    "volume": 9
  },
  {
    "id": "0.48",
    "group": "group A",
    "price": 363,
    "volume": 5
  },
  {
    "id": "0.49",
    "group": "group A",
    "price": 235,
    "volume": 4
  },
  {
    "id": "0.50",
    "group": "group A",
    "price": 1,
    "volume": 10
  },
  {
    "id": "0.51",
    "group": "group A",
    "price": 365,
    "volume": 18
  },
  {
    "id": "0.52",
    "group": "group A",
    "price": 220,
    "volume": 13
  },
  {
    "id": "0.53",
    "group": "group A",
    "price": 356,
    "volume": 8
  },
  {
    "id": "0.54",
    "group": "group A",
    "price": 249,
    "volume": 8
  },
  {
    "id": "0.55",
    "group": "group A",
    "price": 214,
    "volume": 10
  },
  {
    "id": "0.56",
    "group": "group A",
    "price": 440,
    "volume": 19
  },
  {
    "id": "0.57",
    "group": "group A",
    "price": 326,
    "volume": 11
  },
  {
    "id": "0.58",
    "group": "group A",
    "price": 417,
    "volume": 7
  },
  {
    "id": "0.59",
    "group": "group A",
    "price": 149,
    "volume": 14
  },
  {
    "id": "0.60",
    "group": "group A",
    "price": 415,
    "volume": 20
  },
  {
    "id": "0.61",
    "group": "group A",
    "price": 68,
    "volume": 10
  },
  {
    "id": "0.62",
    "group": "group A",
    "price": 243,
    "volume": 6
  },
  {
    "id": "0.63",
    "group": "group A",
    "price": 252,
    "volume": 16
  },
  {
    "id": "0.64",
    "group": "group A",
    "price": 67,
    "volume": 19
  },
  {
    "id": "0.65",
    "group": "group A",
    "price": 55,
    "volume": 7
  },
  {
    "id": "0.66",
    "group": "group A",
    "price": 320,
    "volume": 14
  },
  {
    "id": "0.67",
    "group": "group A",
    "price": 243,
    "volume": 10
  },
  {
    "id": "0.68",
    "group": "group A",
    "price": 376,
    "volume": 4
  },
  {
    "id": "0.69",
    "group": "group A",
    "price": 282,
    "volume": 14
  },
  {
    "id": "0.70",
    "group": "group A",
    "price": 486,
    "volume": 12
  },
  {
    "id": "0.71",
    "group": "group A",
    "price": 114,
    "volume": 5
  },
  {
    "id": "0.72",
    "group": "group A",
    "price": 0,
    "volume": 15
  },
  {
    "id": "1.0",
    "group": "group B",
    "price": 388,
    "volume": 6
  },
  {
    "id": "1.1",
    "group": "group B",
    "price": 444,
    "volume": 11
  },
  {
    "id": "1.2",
    "group": "group B",
    "price": 472,
    "volume": 8
  },
  {
    "id": "1.3",
    "group": "group B",
    "price": 80,
    "volume": 14
  },
  {
    "id": "1.4",
    "group": "group B",
    "price": 388,
    "volume": 19
  },
  {
    "id": "1.5",
    "group": "group B",
    "price": 78,
    "volume": 12
  },
  {
    "id": "1.6",
    "group": "group B",
    "price": 269,
    "volume": 6
  },
  {
    "id": "1.7",
    "group": "group B",
    "price": 40,
    "volume": 8
  },
  {
    "id": "1.8",
    "group": "group B",
    "price": 273,
    "volume": 16
  },
  {
    "id": "1.9",
    "group": "group B",
    "price": 397,
    "volume": 20
  },
  {
    "id": "1.10",
    "group": "group B",
    "price": 310,
    "volume": 15
  },
  {
    "id": "1.11",
    "group": "group B",
    "price": 337,
    "volume": 7
  },
  {
    "id": "1.12",
    "group": "group B",
    "price": 291,
    "volume": 15
  },
  {
    "id": "1.13",
    "group": "group B",
    "price": 173,
    "volume": 18
  },
  {
    "id": "1.14",
    "group": "group B",
    "price": 184,
    "volume": 9
  },
  {
    "id": "1.15",
    "group": "group B",
    "price": 406,
    "volume": 7
  },
  {
    "id": "1.16",
    "group": "group B",
    "price": 228,
    "volume": 10
  },
  {
    "id": "1.17",
    "group": "group B",
    "price": 91,
    "volume": 7
  },
  {
    "id": "1.18",
    "group": "group B",
    "price": 162,
    "volume": 4
  },
  {
    "id": "1.19",
    "group": "group B",
    "price": 179,
    "volume": 15
  },
  {
    "id": "1.20",
    "group": "group B",
    "price": 421,
    "volume": 20
  },
  {
    "id": "1.21",
    "group": "group B",
    "price": 418,
    "volume": 14
  },
  {
    "id": "1.22",
    "group": "group B",
    "price": 343,
    "volume": 7
  },
  {
    "id": "1.23",
    "group": "group B",
    "price": 41,
    "volume": 11
  },
  {
    "id": "1.24",
    "group": "group B",
    "price": 418,
    "volume": 18
  },
  {
    "id": "1.25",
    "group": "group B",
    "price": 278,
    "volume": 10
  },
  {
    "id": "1.26",
    "group": "group B",
    "price": 212,
    "volume": 13
  },
  {
    "id": "1.27",
    "group": "group B",
    "price": 447,
    "volume": 16
  },
  {
    "id": "1.28",
    "group": "group B",
    "price": 188,
    "volume": 20
  },
  {
    "id": "1.29",
    "group": "group B",
    "price": 11,
    "volume": 6
  },
  {
    "id": "1.30",
    "group": "group B",
    "price": 391,
    "volume": 6
  },
  {
    "id": "1.31",
    "group": "group B",
    "price": 157,
    "volume": 5
  },
  {
    "id": "1.32",
    "group": "group B",
    "price": 214,
    "volume": 8
  },
  {
    "id": "1.33",
    "group": "group B",
    "price": 149,
    "volume": 5
  },
  {
    "id": "1.34",
    "group": "group B",
    "price": 97,
    "volume": 9
  },
  {
    "id": "1.35",
    "group": "group B",
    "price": 448,
    "volume": 14
  },
  {
    "id": "1.36",
    "group": "group B",
    "price": 265,
    "volume": 19
  },
  {
    "id": "1.37",
    "group": "group B",
    "price": 117,
    "volume": 12
  },
  {
    "id": "1.38",
    "group": "group B",
    "price": 40,
    "volume": 8
  },
  {
    "id": "1.39",
    "group": "group B",
    "price": 79,
    "volume": 15
  },
  {
    "id": "1.40",
    "group": "group B",
    "price": 191,
    "volume": 14
  },
  {
    "id": "1.41",
    "group": "group B",
    "price": 286,
    "volume": 6
  },
  {
    "id": "1.42",
    "group": "group B",
    "price": 6,
    "volume": 15
  },
  {
    "id": "1.43",
    "group": "group B",
    "price": 96,
    "volume": 18
  },
  {
    "id": "1.44",
    "group": "group B",
    "price": 472,
    "volume": 18
  },
  {
    "id": "1.45",
    "group": "group B",
    "price": 5,
    "volume": 11
  },
  {
    "id": "1.46",
    "group": "group B",
    "price": 232,
    "volume": 6
  },
  {
    "id": "1.47",
    "group": "group B",
    "price": 140,
    "volume": 16
  },
  {
    "id": "1.48",
    "group": "group B",
    "price": 43,
    "volume": 17
  },
  {
    "id": "1.49",
    "group": "group B",
    "price": 402,
    "volume": 15
  },
  {
    "id": "1.50",
    "group": "group B",
    "price": 380,
    "volume": 17
  },
  {
    "id": "1.51",
    "group": "group B",
    "price": 94,
    "volume": 20
  },
  {
    "id": "2.0",
    "group": "group C",
    "price": 224,
    "volume": 13
  },
  {
    "id": "2.1",
    "group": "group C",
    "price": 307,
    "volume": 11
  },
  {
    "id": "2.2",
    "group": "group C",
    "price": 419,
    "volume": 14
  },
  {
    "id": "2.3",
    "group": "group C",
    "price": 315,
    "volume": 5
  },
  {
    "id": "2.4",
    "group": "group C",
    "price": 172,
    "volume": 6
  },
  {
    "id": "2.5",
    "group": "group C",
    "price": 448,
    "volume": 14
  },
  {
    "id": "2.6",
    "group": "group C",
    "price": 76,
    "volume": 20
  },
  {
    "id": "2.7",
    "group": "group C",
    "price": 126,
    "volume": 11
  },
  {
    "id": "2.8",
    "group": "group C",
    "price": 385,
    "volume": 7
  },
  {
    "id": "2.9",
    "group": "group C",
    "price": 14,
    "volume": 9
  },
  {
    "id": "2.10",
    "group": "group C",
    "price": 106,
    "volume": 19
  },
  {
    "id": "2.11",
    "group": "group C",
    "price": 284,
    "volume": 10
  },
  {
    "id": "2.12",
    "group": "group C",
    "price": 72,
    "volume": 20
  },
  {
    "id": "2.13",
    "group": "group C",
    "price": 371,
    "volume": 4
  },
  {
    "id": "2.14",
    "group": "group C",
    "price": 207,
    "volume": 19
  },
  {
    "id": "2.15",
    "group": "group C",
    "price": 365,
    "volume": 9
  },
  {
    "id": "2.16",
    "group": "group C",
    "price": 403,
    "volume": 14
  },
  {
    "id": "2.17",
    "group": "group C",
    "price": 5,
    "volume": 5
  },
  {
    "id": "2.18",
    "group": "group C",
    "price": 481,
    "volume": 16
  },
  {
    "id": "2.19",
    "group": "group C",
    "price": 332,
    "volume": 11
  },
  {
    "id": "2.20",
    "group": "group C",
    "price": 380,
    "volume": 16
  },
  {
    "id": "2.21",
    "group": "group C",
    "price": 38,
    "volume": 4
  },
  {
    "id": "2.22",
    "group": "group C",
    "price": 336,
    "volume": 8
  },
  {
    "id": "2.23",
    "group": "group C",
    "price": 183,
    "volume": 5
  },
  {
    "id": "2.24",
    "group": "group C",
    "price": 4,
    "volume": 19
  },
  {
    "id": "2.25",
    "group": "group C",
    "price": 334,
    "volume": 11
  },
  {
    "id": "2.26",
    "group": "group C",
    "price": 80,
    "volume": 13
  },
  {
    "id": "2.27",
    "group": "group C",
    "price": 85,
    "volume": 4
  },
  {
    "id": "2.28",
    "group": "group C",
    "price": 2,
    "volume": 5
  },
  {
    "id": "2.29",
    "group": "group C",
    "price": 362,
    "volume": 13
  },
  {
    "id": "2.30",
    "group": "group C",
    "price": 131,
    "volume": 6
  },
  {
    "id": "2.31",
    "group": "group C",
    "price": 359,
    "volume": 15
  },
  {
    "id": "2.32",
    "group": "group C",
    "price": 179,
    "volume": 16
  },
  {
    "id": "2.33",
    "group": "group C",
    "price": 345,
    "volume": 17
  },
  {
    "id": "2.34",
    "group": "group C",
    "price": 343,
    "volume": 18
  },
  {
    "id": "2.35",
    "group": "group C",
    "price": 231,
    "volume": 9
  },
  {
    "id": "2.36",
    "group": "group C",
    "price": 88,
    "volume": 4
  },
  {
    "id": "2.37",
    "group": "group C",
    "price": 299,
    "volume": 5
  },
  {
    "id": "2.38",
    "group": "group C",
    "price": 468,
    "volume": 8
  },
  {
    "id": "2.39",
    "group": "group C",
    "price": 405,
    "volume": 12
  },
  {
    "id": "2.40",
    "group": "group C",
    "price": 253,
    "volume": 10
  },
  {
    "id": "2.41",
    "group": "group C",
    "price": 139,
    "volume": 16
  },
  {
    "id": "2.42",
    "group": "group C",
    "price": 137,
    "volume": 14
  },
  {
    "id": "2.43",
    "group": "group C",
    "price": 363,
    "volume": 16
  },
  {
    "id": "2.44",
    "group": "group C",
    "price": 91,
    "volume": 9
  },
  {
    "id": "2.45",
    "group": "group C",
    "price": 213,
    "volume": 20
  },
  {
    "id": "2.46",
    "group": "group C",
    "price": 330,
    "volume": 8
  },
  {
    "id": "2.47",
    "group": "group C",
    "price": 319,
    "volume": 9
  },
  {
    "id": "2.48",
    "group": "group C",
    "price": 411,
    "volume": 10
  },
  {
    "id": "2.49",
    "group": "group C",
    "price": 80,
    "volume": 14
  },
  {
    "id": "2.50",
    "group": "group C",
    "price": 83,
    "volume": 15
  },
  {
    "id": "2.51",
    "group": "group C",
    "price": 456,
    "volume": 16
  },
  {
    "id": "2.52",
    "group": "group C",
    "price": 397,
    "volume": 10
  },
  {
    "id": "2.53",
    "group": "group C",
    "price": 131,
    "volume": 5
  },
  {
    "id": "2.54",
    "group": "group C",
    "price": 354,
    "volume": 20
  }
]

const SwarmPlot = () => (
    <ResponsiveSwarmPlot
        data={data}
        groups={[ 'group A', 'group B', 'group C' ]}
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
        size={{
            key: 'volume',
            values: [
                4,
                20
            ],
            sizes: [
                6,
                20
            ]
        }}
        forceStrength={4}
        simulationIterations={100}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    0.5
                ]
            ]
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: -46
        }}
        axisRight={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: 76
        }}
        axisBottom={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: -76
        }}
    />
)

export default SwarmPlot;
