// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/boxplot
import { ResponsiveBoxPlot } from '@nivo/boxplot';

const data = [
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.495696679786698
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.30748620193094
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.886222286861045
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.574065729131297
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.656786315624642
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 7.098838279202441
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.2253622931579375
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.106673204053166
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.220842470667418
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.409089788216785
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.473498349416281
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.052045425065872
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.223366025817249
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.193941236129811
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.084603360949581
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.6321464382387516
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.9208652543711136
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.402305148672474
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.589954017228747
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.9355390757719952
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.21319739834869
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.125056716734841
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 4.831322015526555
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.934348894948432
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.043847579905837
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.175683609815975
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.31804590332871
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.697314738745015
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.610822334878202
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.250578176618246
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.461269254638249
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.321759349480769
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.348449646608962
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.478839185160679
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.576333421508454
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.14221568177879
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.2510390508675595
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.014401661339149
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.278412624615478
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.478277658930304
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 6.15914139206202
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.316643199600724
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 1.7196357007080438
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.593401533014953
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 9.340259207951283
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.053154914151065
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.306606552635756
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.00445626578939
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.694220254666481
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.197614452396653
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 5.371873928513162
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.413790655380995
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 6.1254838459412735
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 6.935127022365
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.991731443742805
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.060614357322926
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.607752931853989
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.882881120570444
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 5.329454923412795
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.16529561086601
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.918247246684929
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.33937186590081
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.853382320876767
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.563495465400299
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 5.30158985156392
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.604206452394101
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.429034110377571
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.935403066640469
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 9.084974041193075
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.565668202823732
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.872755840493136
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.823404476363445
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.644902242894805
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.426147722144583
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.699012185173533
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.306654408173786
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.44713357640626
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.9137140200276015
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.96155312378081
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.688510664886731
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.347934998776211
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.800586445659763
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.640948682760701
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.697757607390909
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.935410576614256
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 7.181529263015557
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.2966249428125165
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.043932040846533
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.06267213662205
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.85420614748416
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.296852971877843
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.859407624014322
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.160565583338261
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.215055647152202
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 2.850671434493652
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.8438295502768485
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.1214727697797935
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.406451764721733
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.634922213950286
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.1132602169201835
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.161148033881071
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 9.36248804513329
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 11.757034570760966
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.98726951254545
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 5.496530137406853
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 9.067229279441973
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 9.844127491289118
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.271098745645892
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.439362148091539
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 5.431445559507411
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.254900573865721
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 10.804572449382878
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 9.565027631900724
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.523814128821012
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.681538841109942
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.347665209223968
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 3.7364577492538835
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 4.875658268262711
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.85670810723636
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.040946725845153
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.784509405812997
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.8829799819222925
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.8176853638302375
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.0560130870408453
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.242739904617177
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.023352722177396
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.0065858785772495
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.009065937167022
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.328371656878572
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.668176454781507
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.868436924643804
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.774893725684852
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.368503010212699
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.935928114564405
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 2.4802039178718704
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.672349701423329
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.319890267696886
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.306589461186816
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.160683715152883
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.37813957575014
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 4.74180792478534
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.801578693767108
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.524278962649438
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.988982426750085
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.83541190548625
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.443267228043561
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.2238255916770635
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.208631184424043
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.872650040955133
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.184956371125621
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.510885595607172
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.265454669940328
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.754849946444804
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 4.296760404837286
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.917578248551089
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.673771872168298
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.948113523200349
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.658431721091849
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.254965750427778
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.007156410236948
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 1.858460751659405
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.265676009163764
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 5.827139044148664
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 5.2668551695935255
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 5.5364172366899105
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.23885835731998
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.11551586618361
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 1.242783111248638
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.780745715556827
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.218417332628565
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.932269814451958
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.911008874008355
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 5.528915074284109
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 6.1027433594354346
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 2.9453170844984062
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.7620814119074595
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.477888909918894
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 5.606109853349906
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 3.4782833709578362
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 3.9761976209948875
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 8.297064167662631
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 13.415126747139542
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 5.9033686917578105
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.438941074412249
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.684598332367831
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 7.671752867869247
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 7.4873565537599545
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 4.38879720366454
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 9.439368630652137
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 3.001265213861773
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 0.6685202535434538
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 10.896497776507362
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 7.746343057799886
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 8.222221738718137
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": -0.36921014181593037
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 5.807013327269151
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 8.521477753092597
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 0.8432715134126809
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 4.770278089320763
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.322866087611083
  }
];

const BoxChart = () => (
    <ResponsiveBoxPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
        minValue={0}
        maxValue={10}
        subGroupBy="subgroup"
        padding={0.12}
        enableGridX={true}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        colors={{ scheme: 'nivo' }}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        medianWidth={2}
        medianColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        whiskerEndSize={0.6}
        whiskerColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionConfig="stiff"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemWidth: 60,
                itemHeight: 20,
                itemsSpacing: 3,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 20,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default BoxChart;
