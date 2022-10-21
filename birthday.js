const SPRINKLE_COLORS = 
[
    "#53B8CB",
    "#7BAA3C",
    "#F1EA2D",
    "#64BFD8",
    "#CF7585",
    "#C8685F",
]

$(document).ready(function(){
    makeSprinkles();
    colorHeader();
});

const SPRINK = 100;
function makeSprinkles() {
    let cake = document.getElementsByClassName('cake')[0];
    let cake_size = cake.offsetHeight;

    for (let i = 0; i < SPRINK; i++) {
        let sprinkle = document.createElement('div');
        sprinkle.classList.add('sprinkle');

        let left = Math.floor(Math.random()*cake_size);
        let top = Math.floor(Math.random()*cake_size);

        let angle = Math.floor(Math.random()*360);
        let color = SPRINKLE_COLORS[Math.floor(Math.random()*SPRINKLE_COLORS.length)];

        sprinkle.style.left = left + "px";
        sprinkle.style.top = top + "px";
        sprinkle.style.rotate = angle + "deg";
        sprinkle.style.background = color;

        cake.append(sprinkle);
    }
}

function colorHeader() {
    let header = document.getElementsByTagName('span');

    for (let i = 0; i < header.length; i++) {
        let color = SPRINKLE_COLORS[Math.floor(Math.random()*SPRINKLE_COLORS.length)];
        header[i].style.color = color;        
    }
}

function makeSlice(percent) {
    
    let canvas = document.getElementById('missing');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (percent == 1) return;
    
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    
    let radius = centerX + 10;
    let start_angle = 2*percent*Math.PI;
    let end_angle = 2*Math.PI

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start_angle, end_angle);
    ctx.closePath();
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--plate-color');
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#F4E5E0';
    ctx.stroke();
}

const TEST_SIZE = 2500;
function calculate() {
    let people = document.getElementById('people').value;
    if (!people) return;

    let count = i = 0;    

    let iv = setInterval(function() {
        let birthdays = getBirthdays(people);
        let twin = hasTwin(birthdays);
        
        if (twin) {
            count++;
        }
        
        i++;
        let percent = count/i;

        makeSlice(percent);
        let display = document.getElementsByClassName('count')[0];
        let current_percentage = document.getElementsByClassName('percent')[0];

        display.innerHTML = count + " birthday twins found<br>from " + i + " groups of " + people + " people.";
        current_percentage.innerHTML = (percent*100).toFixed(2) + "%"

        if (i >= TEST_SIZE) {
            clearInterval(iv);
            let final = count/TEST_SIZE*100;
        }
    }, 1);
}

function getBirthdays(people) {
    let birthdays = [];

    for (let i = 0; i < people; i++) {
        let rand = Math.floor(Math.random()*MAX);
        for (let j = 0; j < weighted.length; j++) {
            if (rand <= weighted[j]) {
                birthdays.push(j);
                break;
            }
        }
    }

    return birthdays;
}

function hasTwin(birthdays) {
    let checked = [];

    for (let i = 0; i < birthdays.length; i++) {
        if (checked[birthdays[i]]) {
            return true;
        }

        checked[birthdays[i]] = true;
    }

    return false;
}

const weighted = 
[
    12301,
    24530,
    36754,
    48902,
    61045,
    73153,
    85260,
    97347,
    109419,
    121474,
    133483,
    145476,
    157468,
    169442,
    181398,
    193349,
    205294,
    217238,
    229173,
    241097,
    253018,
    264938,
    276827,
    288709,
    300575,
    312436,
    324296,
    336151,
    348006,
    359834,
    371659,
    383472,
    395273,
    407073,
    418867,
    430655,
    442430,
    454202,
    465973,
    477742,
    489510,
    501278,
    513032,
    524781,
    536519,
    548256,
    559977,
    571697,
    583415,
    595114,
    606806,
    618492,
    630173,
    641853,
    653533,
    665208,
    676882,
    688547,
    700211,
    711866,
    723509,
    735146,
    746782,
    758402,
    770016,
    781626,
    793234,
    804841,
    816440,
    828033,
    839623,
    851212,
    862798,
    874379,
    885959,
    897535,
    909107,
    920679,
    932248,
    943815,
    955380,
    966937,
    978493,
    990048,
    1001602,
    1013150,
    1024697,
    1036242,
    1047767,
    1059283,
    1070786,
    1082288,
    1093779,
    1105269,
    1116758,
    1128245,
    1139726,
    1151194,
    1162646,
    1174088,
    1185528,
    1196959,
    1208387,
    1219797,
    1231203,
    1242601,
    1253989,
    1265363,
    1276730,
    1288082,
    1299433,
    1310783,
    1322128,
    1333467,
    1344802,
    1356134,
    1367462,
    1378786,
    1390095,
    1401403,
    1412707,
    1424005,
    1435301,
    1446594,
    1457882,
    1469170,
    1480453,
    1491729,
    1503001,
    1514269,
    1525534,
    1536795,
    1548051,
    1559306,
    1570560,
    1581813,
    1593064,
    1604308,
    1615548,
    1626788,
    1638017,
    1649239,
    1660460,
    1671679,
    1682895,
    1694091,
    1705284,
    1716475,
    1727666,
    1738854,
    1750037,
    1761219,
    1772400,
    1783581,
    1794761,
    1805937,
    1817110,
    1828274,
    1839438,
    1850598,
    1861758,
    1872915,
    1884071,
    1895220,
    1906369,
    1917518,
    1928660,
    1939801,
    1950938,
    1962075,
    1973207,
    1984337,
    1995467,
    2006596,
    2017725,
    2028850,
    2039972,
    2051091,
    2062210,
    2073325,
    2084438,
    2095549,
    2106651,
    2117738,
    2128821,
    2139902,
    2150983,
    2162061,
    2173138,
    2184212,
    2195285,
    2206356,
    2217426,
    2228491,
    2239554,
    2250613,
    2261670,
    2272723,
    2283772,
    2294818,
    2305863,
    2316904,
    2327944,
    2338983,
    2350015,
    2361040,
    2372063,
    2383085,
    2394104,
    2405120,
    2416135,
    2427150,
    2438164,
    2449176,
    2460187,
    2471195,
    2482199,
    2493203,
    2504206,
    2515209,
    2526211,
    2537211,
    2548210,
    2559206,
    2570195,
    2581176,
    2592155,
    2603131,
    2614107,
    2625082,
    2636056,
    2647030,
    2657997,
    2668955,
    2679910,
    2690864,
    2701817,
    2712770,
    2723722,
    2734673,
    2745624,
    2756573,
    2767522,
    2778470,
    2789415,
    2800355,
    2811295,
    2822229,
    2833160,
    2844090,
    2855019,
    2865947,
    2876874,
    2887801,
    2898726,
    2909647,
    2920568,
    2931482,
    2942393,
    2953302,
    2964207,
    2975111,
    2986014,
    2996915,
    3007816,
    3018716,
    3029615,
    3040514,
    3051412,
    3062309,
    3073204,
    3084097,
    3094990,
    3105881,
    3116771,
    3127659,
    3138545,
    3149428,
    3160311,
    3171194,
    3182077,
    3192959,
    3203836,
    3214709,
    3225574,
    3236438,
    3247297,
    3258155,
    3269010,
    3279865,
    3290719,
    3301569,
    3312418,
    3323263,
    3334106,
    3344949,
    3355784,
    3366614,
    3377441,
    3388267,
    3399092,
    3409916,
    3420739,
    3431556,
    3442371,
    3453184,
    3463996,
    3474799,
    3485601,
    3496398,
    3507192,
    3517974,
    3528753,
    3539526,
    3550294,
    3561059,
    3571823,
    3582575,
    3593319,
    3604061,
    3614802,
    3625541,
    3636276,
    3647007,
    3657734,
    3668453,
    3679170,
    3689884,
    3700598,
    3711295,
    3721988,
    3732679,
    3743364,
    3754037,
    3764710,
    3775374,
    3786038,
    3796692,
    3807331,
    3817955,
    3828578,
    3839200,
    3849810,
    3860414,
    3870981,
    3881527,
    3884143,
    3894547,
    3904948,
    3915342,
    3925731,
    3936069,
    3946369,
    3956465,
    3966509,
    3976524,
    3986502,
    3996456,
    4006339,
    4016057,
    4025600,
    4034907,
    4043703,
    4051772,
    4059564,
    4066138
]

let MAX = 4066138;