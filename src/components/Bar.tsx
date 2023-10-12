import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    "country": "AD",
    "hot dog": 101,
    "hot dogColor": "hsl(31, 70%, 50%)",
    "burger": 78,
    "burgerColor": "hsl(147, 70%, 50%)",
    "sandwich": 134,
    "sandwichColor": "hsl(62, 70%, 50%)",
    "kebab": 46,
    "kebabColor": "hsl(215, 70%, 50%)",
    "fries": 115,
    "friesColor": "hsl(74, 70%, 50%)",
    "donut": 68,
    "donutColor": "hsl(353, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 120,
    "hot dogColor": "hsl(178, 70%, 50%)",
    "burger": 172,
    "burgerColor": "hsl(187, 70%, 50%)",
    "sandwich": 0,
    "sandwichColor": "hsl(298, 70%, 50%)",
    "kebab": 75,
    "kebabColor": "hsl(83, 70%, 50%)",
    "fries": 110,
    "friesColor": "hsl(26, 70%, 50%)",
    "donut": 60,
    "donutColor": "hsl(318, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 63,
    "hot dogColor": "hsl(246, 70%, 50%)",
    "burger": 90,
    "burgerColor": "hsl(145, 70%, 50%)",
    "sandwich": 68,
    "sandwichColor": "hsl(58, 70%, 50%)",
    "kebab": 99,
    "kebabColor": "hsl(335, 70%, 50%)",
    "fries": 28,
    "friesColor": "hsl(202, 70%, 50%)",
    "donut": 28,
    "donutColor": "hsl(94, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 184,
    "hot dogColor": "hsl(165, 70%, 50%)",
    "burger": 84,
    "burgerColor": "hsl(180, 70%, 50%)",
    "sandwich": 124,
    "sandwichColor": "hsl(318, 70%, 50%)",
    "kebab": 140,
    "kebabColor": "hsl(318, 70%, 50%)",
    "fries": 127,
    "friesColor": "hsl(63, 70%, 50%)",
    "donut": 141,
    "donutColor": "hsl(251, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 105,
    "hot dogColor": "hsl(230, 70%, 50%)",
    "burger": 123,
    "burgerColor": "hsl(73, 70%, 50%)",
    "sandwich": 26,
    "sandwichColor": "hsl(231, 70%, 50%)",
    "kebab": 130,
    "kebabColor": "hsl(183, 70%, 50%)",
    "fries": 124,
    "friesColor": "hsl(218, 70%, 50%)",
    "donut": 146,
    "donutColor": "hsl(333, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 89,
    "hot dogColor": "hsl(41, 70%, 50%)",
    "burger": 85,
    "burgerColor": "hsl(64, 70%, 50%)",
    "sandwich": 54,
    "sandwichColor": "hsl(283, 70%, 50%)",
    "kebab": 130,
    "kebabColor": "hsl(122, 70%, 50%)",
    "fries": 85,
    "friesColor": "hsl(142, 70%, 50%)",
    "donut": 15,
    "donutColor": "hsl(158, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 41,
    "hot dogColor": "hsl(51, 70%, 50%)",
    "burger": 134,
    "burgerColor": "hsl(77, 70%, 50%)",
    "sandwich": 132,
    "sandwichColor": "hsl(126, 70%, 50%)",
    "kebab": 2,
    "kebabColor": "hsl(51, 70%, 50%)",
    "fries": 30,
    "friesColor": "hsl(312, 70%, 50%)",
    "donut": 148,
    "donutColor": "hsl(187, 70%, 50%)"
  }
];

const Bar = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default Bar;
