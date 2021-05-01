<template>
    <div class="rankmain">
        <div class="main">
            <div class="top">
                <div class="logo">
                    <Logo />
                </div>
                <div class="nav">
                    <Navi />
                </div>
            </div>
        </div>

        <div class="rankers">

            <div class="wheresearch">   
                <div id="vue">
                    <div class="input-select">
                        <label>Country</label>
                        <select v-model="selected">
                            <option v-for="country in countries" v-bind:key="country.code">
                                {{ country.name }}
                            </option>
                        </select>
                    </div>
                    
                    <h2>Selected: <strong>{{ selected }} ({{ selectedName }})</strong></h2>
                </div>
            </div>

            <div class="maintext">
                <h1>국내 TOP 10</h1>
            </div>
            <div class="toptier">
                <div class="rank2-wrap">
                    <div class="rank2">
                        <div></div>
                        <div>
                            <p>🥈</p>
                            <img src="https://whywetrain.com/wp-content/uploads/2017/12/1514142280_andrei-deiu-300x300.jpg" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>헨리 파웰</p>
                            <p>💪🏻Professional Gym</p>
                        </div>
                        <h1>2</h1>
                    </div>
                </div>

                <div class="rank1-wrap">
                    <div class="rank1">
                        <div></div>
                        <div>
                            <p>🥇</p>
                            <img src="https://lh3.googleusercontent.com/proxy/XcC8MtP9znfZ4cXSCBsruaJHmzOVaFf1st5ynVZc5EWn-0M87K2cCi_2pQum1g5flWmX_DIyj-x7KnSLxXMqcOEP8SRQ4bRIwCq0UFEef4wZxy73_xUkBMzI4rnzeS__Ap_4LRXBti9EI1ERLkEUMBUvNzN1UXEUX5p10m2axIkYg08DE4LBKFP4PyKVX-ScrEovcQmsX7JkKZUs_PRJjvuvE8wsNXNjU_zPVXCKtANX8yRFQdB0GqMZxhsR5pwQ2_DD00-yDxsshfqKyxYqfYFQFggpy1T_-Eg1yD5lxcmPuDZ8Su8CYgdjHelI-RxxAK7DstkloQejodHxqzzErMO-VuRDaws5gzpJPSHkhCMOc5cIVtZVVqC5Wy-dlKCdEHbS7jTCMiHWNcWkVLCMWb4MC4vRTlB0Ow1O0snZBiT76awdbbkJfuAXNFGdKL5ft7uvIS8mxbROiLiNfxOrAlmEz6G1oX8pqpPBUDEZqSBQMPs" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>야엘 셀비아</p>
                            <p>💪🏻MyProtein Gym</p>
                        </div>
                        <h1>1</h1>
                    </div>
                </div>
                <div class="rank3-wrap">
                    <div class="rank3">
                        <div></div>
                        <div>
                            <p>🥉</p>
                            <img src="https://www.superprof.com/images/teachers/teacher-home-fitness-model-and-personal-trainer-give-advice-and-train-people-get-shape.jpg" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>그레고리 노비치</p>
                            <p>💪🏻MyProtein Gym</p>
                        </div>
                        <h1>3</h1>
                    </div>
                </div>
            </div>
            <div class="rest">
                <div class="oneperson">
                    <p>4위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: green;">▲4</p>
                </div>

                <div class="oneperson">
                    <p>5위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: green;">▲1</p>
                </div>

                <div class="oneperson">
                    <p>6위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼2</p>
                </div>

                <div class="oneperson">
                    <p>7위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>

                <div class="oneperson">
                    <p>8위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>

                <div class="oneperson">
                    <p>9위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>

                <div class="oneperson">
                    <p>10위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
    export default {
        el: '#vue',
        mounted() {
            this.countries.push(
            {
                name: 'Afghanistan',
                code: 'AF'
            }, {
                name: 'Åland Islands',
                code: 'AX'
            }, {
                name: 'Albania',
                code: 'AL'
            }, {
                name: 'Algeria',
                code: 'DZ'
            }, {
                name: 'American Samoa',
                code: 'AS'
            }, {
                name: 'AndorrA',
                code: 'AD'
            }, {
                name: 'Angola',
                code: 'AO'
            }, {
                name: 'Anguilla',
                code: 'AI'
            }, {
                name: 'Antarctica',
                code: 'AQ'
            }, {
                name: 'Antigua and Barbuda',
                code: 'AG'
            }, {
                name: 'Argentina',
                code: 'AR'
            }, {
                name: 'Armenia',
                code: 'AM'
            }, {
                name: 'Aruba',
                code: 'AW'
            }, {
                name: 'Australia',
                code: 'AU'
            }, {
                name: 'Austria',
                code: 'AT'
            }, {
                name: 'Azerbaijan',
                code: 'AZ'
            }, {
                name: 'Bahamas',
                code: 'BS'
            }, {
                name: 'Bahrain',
                code: 'BH'
            }, {
                name: 'Bangladesh',
                code: 'BD'
            }, {
                name: 'Barbados',
                code: 'BB'
            }, {
                name: 'Belarus',
                code: 'BY'
            }, {
                name: 'Belgium',
                code: 'BE'
            }, {
                name: 'Belize',
                code: 'BZ'
            }, {
                name: 'Benin',
                code: 'BJ'
            }, {
                name: 'Bermuda',
                code: 'BM'
            }, {
                name: 'Bhutan',
                code: 'BT'
            }, {
                name: 'Bolivia',
                code: 'BO'
            }, {
                name: 'Bosnia and Herzegovina',
                code: 'BA'
            }, {
                name: 'Botswana',
                code: 'BW'
            }, {
                name: 'Bouvet Island',
                code: 'BV'
            }, {
                name: 'Brazil',
                code: 'BR'
            }, {
                name: 'British Indian Ocean Territory',
                code: 'IO'
            }, {
                name: 'Brunei Darussalam',
                code: 'BN'
            }, {
                name: 'Bulgaria',
                code: 'BG'
            }, {
                name: 'Burkina Faso',
                code: 'BF'
            }, {
                name: 'Burundi',
                code: 'BI'
            }, {
                name: 'Cambodia',
                code: 'KH'
            }, {
                name: 'Cameroon',
                code: 'CM'
            }, {
                name: 'Canada',
                code: 'CA'
            }, {
                name: 'Cape Verde',
                code: 'CV'
            }, {
                name: 'Cayman Islands',
                code: 'KY'
            }, {
                name: 'Central African Republic',
                code: 'CF'
            }, {
                name: 'Chad',
                code: 'TD'
            }, {
                name: 'Chile',
                code: 'CL'
            }, {
                name: 'China',
                code: 'CN'
            }, {
                name: 'Christmas Island',
                code: 'CX'
            }, {
                name: 'Cocos (Keeling) Islands',
                code: 'CC'
            }, {
                name: 'Colombia',
                code: 'CO'
            }, {
                name: 'Comoros',
                code: 'KM'
            }, {
                name: 'Congo',
                code: 'CG'
            }, {
                name: 'Congo, The Democratic Republic of the',
                code: 'CD'
            }, {
                name: 'Cook Islands',
                code: 'CK'
            }, {
                name: 'Costa Rica',
                code: 'CR'
            }, {
                name: 'Cote D\'Ivoire',
                code: 'CI'
            }, {
                name: 'Croatia',
                code: 'HR'
            }, {
                name: 'Cuba',
                code: 'CU'
            }, {
                name: 'Cyprus',
                code: 'CY'
            }, {
                name: 'Czech Republic',
                code: 'CZ'
            }, {
                name: 'Denmark',
                code: 'DK'
            }, {
                name: 'Djibouti',
                code: 'DJ'
            }, {
                name: 'Dominica',
                code: 'DM'
            }, {
                name: 'Dominican Republic',
                code: 'DO'
            }, {
                name: 'Ecuador',
                code: 'EC'
            }, {
                name: 'Egypt',
                code: 'EG'
            }, {
                name: 'El Salvador',
                code: 'SV'
            }, {
                name: 'Equatorial Guinea',
                code: 'GQ'
            }, {
                name: 'Eritrea',
                code: 'ER'
            }, {
                name: 'Estonia',
                code: 'EE'
            }, {
                name: 'Ethiopia',
                code: 'ET'
            }, {
                name: 'Falkland Islands (Malvinas)',
                code: 'FK'
            }, {
                name: 'Faroe Islands',
                code: 'FO'
            }, {
                name: 'Fiji',
                code: 'FJ'
            }, {
                name: 'Finland',
                code: 'FI'
            }, {
                name: 'France',
                code: 'FR'
            }, {
                name: 'French Guiana',
                code: 'GF'
            }, {
                name: 'French Polynesia',
                code: 'PF'
            }, {
                name: 'French Southern Territories',
                code: 'TF'
            }, {
                name: 'Gabon',
                code: 'GA'
            }, {
                name: 'Gambia',
                code: 'GM'
            }, {
                name: 'Georgia',
                code: 'GE'
            }, {
                name: 'Germany',
                code: 'DE'
            }, {
                name: 'Ghana',
                code: 'GH'
            }, {
                name: 'Gibraltar',
                code: 'GI'
            }, {
                name: 'Greece',
                code: 'GR'
            }, {
                name: 'Greenland',
                code: 'GL'
            }, {
                name: 'Grenada',
                code: 'GD'
            }, {
                name: 'Guadeloupe',
                code: 'GP'
            }, {
                name: 'Guam',
                code: 'GU'
            }, {
                name: 'Guatemala',
                code: 'GT'
            }, {
                name: 'Guernsey',
                code: 'GG'
            }, {
                name: 'Guinea',
                code: 'GN'
            }, {
                name: 'Guinea-Bissau',
                code: 'GW'
            }, {
                name: 'Guyana',
                code: 'GY'
            }, {
                name: 'Haiti',
                code: 'HT'
            }, {
                name: 'Heard Island and Mcdonald Islands',
                code: 'HM'
            }, {
                name: 'Holy See (Vatican City State)',
                code: 'VA'
            }, {
                name: 'Honduras',
                code: 'HN'
            }, {
                name: 'Hong Kong',
                code: 'HK'
            }, {
                name: 'Hungary',
                code: 'HU'
            }, {
                name: 'Iceland',
                code: 'IS'
            }, {
                name: 'India',
                code: 'IN'
            }, {
                name: 'Indonesia',
                code: 'ID'
            }, {
                name: 'Iran, Islamic Republic Of',
                code: 'IR'
            }, {
                name: 'Iraq',
                code: 'IQ'
            }, {
                name: 'Ireland',
                code: 'IE'
            }, {
                name: 'Isle of Man',
                code: 'IM'
            }, {
                name: 'Israel',
                code: 'IL'
            }, {
                name: 'Italy',
                code: 'IT'
            }, {
                name: 'Jamaica',
                code: 'JM'
            }, {
                name: 'Japan',
                code: 'JP'
            }, {
                name: 'Jersey',
                code: 'JE'
            }, {
                name: 'Jordan',
                code: 'JO'
            }, {
                name: 'Kazakhstan',
                code: 'KZ'
            }, {
                name: 'Kenya',
                code: 'KE'
            }, {
                name: 'Kiribati',
                code: 'KI'
            }, {
                name: 'Korea, Democratic People\'S Republic of',
                code: 'KP'
            }, {
                name: 'Korea, Republic of',
                code: 'KR'
            }, {
                name: 'Kuwait',
                code: 'KW'
            }, {
                name: 'Kyrgyzstan',
                code: 'KG'
            }, {
                name: 'Lao People\'S Democratic Republic',
                code: 'LA'
            }, {
                name: 'Latvia',
                code: 'LV'
            }, {
                name: 'Lebanon',
                code: 'LB'
            }, {
                name: 'Lesotho',
                code: 'LS'
            }, {
                name: 'Liberia',
                code: 'LR'
            }, {
                name: 'Libyan Arab Jamahiriya',
                code: 'LY'
            }, {
                name: 'Liechtenstein',
                code: 'LI'
            }, {
                name: 'Lithuania',
                code: 'LT'
            }, {
                name: 'Luxembourg',
                code: 'LU'
            }, {
                name: 'Macao',
                code: 'MO'
            }, {
                name: 'Macedonia, The Former Yugoslav Republic of',
                code: 'MK'
            }, {
                name: 'Madagascar',
                code: 'MG'
            }, {
                name: 'Malawi',
                code: 'MW'
            }, {
                name: 'Malaysia',
                code: 'MY'
            }, {
                name: 'Maldives',
                code: 'MV'
            }, {
                name: 'Mali',
                code: 'ML'
            }, {
                name: 'Malta',
                code: 'MT'
            }, {
                name: 'Marshall Islands',
                code: 'MH'
            }, {
                name: 'Martinique',
                code: 'MQ'
            }, {
                name: 'Mauritania',
                code: 'MR'
            }, {
                name: 'Mauritius',
                code: 'MU'
            }, {
                name: 'Mayotte',
                code: 'YT'
            }, {
                name: 'Mexico',
                code: 'MX'
            }, {
                name: 'Micronesia, Federated States of',
                code: 'FM'
            }, {
                name: 'Moldova, Republic of',
                code: 'MD'
            }, {
                name: 'Monaco',
                code: 'MC'
            }, {
                name: 'Mongolia',
                code: 'MN'
            }, {
                name: 'Montserrat',
                code: 'MS'
            }, {
                name: 'Morocco',
                code: 'MA'
            }, {
                name: 'Mozambique',
                code: 'MZ'
            }, {
                name: 'Myanmar',
                code: 'MM'
            }, {
                name: 'Namibia',
                code: 'NA'
            }, {
                name: 'Nauru',
                code: 'NR'
            }, {
                name: 'Nepal',
                code: 'NP'
            }, {
                name: 'Netherlands',
                code: 'NL'
            }, {
                name: 'Netherlands Antilles',
                code: 'AN'
            }, {
                name: 'New Caledonia',
                code: 'NC'
            }, {
                name: 'New Zealand',
                code: 'NZ'
            }, {
                name: 'Nicaragua',
                code: 'NI'
            }, {
                name: 'Niger',
                code: 'NE'
            }, {
                name: 'Nigeria',
                code: 'NG'
            }, {
                name: 'Niue',
                code: 'NU'
            }, {
                name: 'Norfolk Island',
                code: 'NF'
            }, {
                name: 'Northern Mariana Islands',
                code: 'MP'
            }, {
                name: 'Norway',
                code: 'NO'
            }, {
                name: 'Oman',
                code: 'OM'
            }, {
                name: 'Pakistan',
                code: 'PK'
            }, {
                name: 'Palau',
                code: 'PW'
            }, {
                name: 'Palestinian Territory, Occupied',
                code: 'PS'
            }, {
                name: 'Panama',
                code: 'PA'
            }, {
                name: 'Papua New Guinea',
                code: 'PG'
            }, {
                name: 'Paraguay',
                code: 'PY'
            }, {
                name: 'Peru',
                code: 'PE'
            }, {
                name: 'Philippines',
                code: 'PH'
            }, {
                name: 'Pitcairn',
                code: 'PN'
            }, {
                name: 'Poland',
                code: 'PL'
            }, {
                name: 'Portugal',
                code: 'PT'
            }, {
                name: 'Puerto Rico',
                code: 'PR'
            }, {
                name: 'Qatar',
                code: 'QA'
            }, {
                name: 'Reunion',
                code: 'RE'
            }, {
                name: 'Romania',
                code: 'RO'
            }, {
                name: 'Russian Federation',
                code: 'RU'
            }, {
                name: 'RWANDA',
                code: 'RW'
            }, {
                name: 'Saint Helena',
                code: 'SH'
            }, {
                name: 'Saint Kitts and Nevis',
                code: 'KN'
            }, {
                name: 'Saint Lucia',
                code: 'LC'
            }, {
                name: 'Saint Pierre and Miquelon',
                code: 'PM'
            }, {
                name: 'Saint Vincent and the Grenadines',
                code: 'VC'
            }, {
                name: 'Samoa',
                code: 'WS'
            }, {
                name: 'San Marino',
                code: 'SM'
            }, {
                name: 'Sao Tome and Principe',
                code: 'ST'
            }, {
                name: 'Saudi Arabia',
                code: 'SA'
            }, {
                name: 'Senegal',
                code: 'SN'
            }, {
                name: 'Serbia and Montenegro',
                code: 'CS'
            }, {
                name: 'Seychelles',
                code: 'SC'
            }, {
                name: 'Sierra Leone',
                code: 'SL'
            }, {
                name: 'Singapore',
                code: 'SG'
            }, {
                name: 'Slovakia',
                code: 'SK'
            }, {
                name: 'Slovenia',
                code: 'SI'
            }, {
                name: 'Solomon Islands',
                code: 'SB'
            }, {
                name: 'Somalia',
                code: 'SO'
            }, {
                name: 'South Africa',
                code: 'ZA'
            }, {
                name: 'South Georgia and the South Sandwich Islands',
                code: 'GS'
            }, {
                name: 'Spain',
                code: 'ES'
            }, {
                name: 'Sri Lanka',
                code: 'LK'
            }, {
                name: 'Sudan',
                code: 'SD'
            }, {
                name: 'Suriname',
                code: 'SR'
            }, {
                name: 'Svalbard and Jan Mayen',
                code: 'SJ'
            }, {
                name: 'Swaziland',
                code: 'SZ'
            }, {
                name: 'Sweden',
                code: 'SE'
            }, {
                name: 'Switzerland',
                code: 'CH'
            }, {
                name: 'Syrian Arab Republic',
                code: 'SY'
            }, {
                name: 'Taiwan, Province of China',
                code: 'TW'
            }, {
                name: 'Tajikistan',
                code: 'TJ'
            }, {
                name: 'Tanzania, United Republic of',
                code: 'TZ'
            }, {
                name: 'Thailand',
                code: 'TH'
            }, {
                name: 'Timor-Leste',
                code: 'TL'
            }, {
                name: 'Togo',
                code: 'TG'
            }, {
                name: 'Tokelau',
                code: 'TK'
            }, {
                name: 'Tonga',
                code: 'TO'
            }, {
                name: 'Trinidad and Tobago',
                code: 'TT'
            }, {
                name: 'Tunisia',
                code: 'TN'
            }, {
                name: 'Turkey',
                code: 'TR'
            }, {
                name: 'Turkmenistan',
                code: 'TM'
            }, {
                name: 'Turks and Caicos Islands',
                code: 'TC'
            }, {
                name: 'Tuvalu',
                code: 'TV'
            }, {
                name: 'Uganda',
                code: 'UG'
            }, {
                name: 'Ukraine',
                code: 'UA'
            }, {
                name: 'United Arab Emirates',
                code: 'AE'
            }, {
                name: 'United Kingdom',
                code: 'GB'
            }, {
                name: 'United States',
                code: 'US'
            }, {
                name: 'United States Minor Outlying Islands',
                code: 'UM'
            }, {
                name: 'Uruguay',
                code: 'UY'
            }, {
                name: 'Uzbekistan',
                code: 'UZ'
            }, {
                name: 'Vanuatu',
                code: 'VU'
            }, {
                name: 'Venezuela',
                code: 'VE'
            }, {
                name: 'Viet Nam',
                code: 'VN'
            }, {
                name: 'Virgin Islands, British',
                code: 'VG'
            }, {
                name: 'Virgin Islands, U.S.',
                code: 'VI'
            }, {
                name: 'Wallis and Futuna',
                code: 'WF'
            }, {
                name: 'Western Sahara',
                code: 'EH'
            }, {
                name: 'Yemen',
                code: 'YE'
            }, {
                name: 'Zambia',
                code: 'ZM'
            }, {
                name: 'Zimbabwe',
                code: 'ZW'
            }
            )
        },
        data: {
            //bind selected option  to local variable identical to desired selected variable from ajax
            selected: 'US',
            //uncommenting below would select US initially
            //selected: 'US',
            //use ajax data in separate form to create v-for options
            countries: [
                {
                    name: 'Please Select an Option',
                    code: ''
                },                
            ]
        },

        computed: {
            selectedName() {
                var self = this,
                    name = "";

                (this.countries || []).filter(country => {
                    if(country.code == self.selected) {
                        name = country.name
                        return;
                    }
                })
                return name;
            }
        }
    }
</script>

<style scoped>
    .rankmain {
        height: 100%;
        background-color: black;
        z-index: -1000;
    }   

    .rankers {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }

    .main {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
    }

    .top { 
        width: 950px;
        display: flex; 
        justify-content: space-between; 
        padding-top: 30px;
    }

    .rest {
        width: 950px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }
    .oneperson {
        text-align: center;
        background-color: white;
        height: 80px;
        width: 800px;
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 6fr 1fr 1fr;
        align-self: center;
        align-items: center;
        margin-top: 20px;
        border-radius: 12px;
        transition: transform .5s;
        cursor: pointer;
    }

    .oneperson:hover {
        transform: scale(1.05); 
    }

    .oneperson img {
        width: 50px;
        border-radius: 70%;
    }

    .nameandwhere p {
        margin: 0;
    }

    .rank1 {
        color: white;
        background-image: url(https://image.freepik.com/free-vector/stylish-black-and-gold-background-with-text-space_1017-24790.jpg);
        text-align: center;
        width: 220px;
        height: 420px;
        border-radius: 20px;
        clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
        display: grid;
        grid-template-rows: 1fr 10fr 4fr 5fr;
        transition: transform .5s;
        cursor: pointer;
    }

    .rank1-wrap {
        transition: transform .5s;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank1-wrap:hover {
        filter: drop-shadow(0px 0px 20px #ffd621);
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank1:hover {
        transform: scale(1.05); 
        
    }

    .rank2 {
        color: white;
        background-image: url(https://image.freepik.com/free-vector/abstract-silver-line-shadow-slash-on-black-with-blank-space-design-modern-luxury-background_33869-1997.jpg);
        text-align: center;
        width: 200px;
        height: 400px;
        border-radius: 20px;
        clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
        display: grid;
        grid-template-rows: 1fr 10fr 4fr 5fr;
        transition: transform .5s;
        cursor: pointer;
    }

    .rank2:hover {
        transform: scale(1.05); 
    }

    .rank2-wrap {
        transition: transform .5s;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank2-wrap:hover {
        filter: drop-shadow(0px 0px 20px #a3a3a3);
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank3 {
        color: white;
        background-image: url(https://media.istockphoto.com/vectors/black-and-gold-abstract-background-vector-id1165373979?k=6&m=1165373979&s=612x612&w=0&h=uy_UMdtRM1HOF4kng9-ipqMEslO-gjdaZMDOQAnV2AA=);
        text-align: center;
        width: 180px;
        height: 380px;
        border-radius: 20px;
        clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
        display: grid;
        grid-template-rows: 1fr 10fr 4fr 5fr;
        transition: transform .5s;
        cursor: pointer;
    }

    .rank3-wrap {
        transition: transform .5s;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank3-wrap:hover {
        filter: drop-shadow(0px 0px 20px #6e4433);
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank3:hover {
        transform: scale(1.05); 
    }

    .rank1 img {
        width: 140px;
        border-radius: 70%;
    }
    .rank2 img {
        width: 100px;
        border-radius: 70%;
    }
    .rank3 img {
        width: 100px;
        border-radius: 70%;
    }
    .toptier {
        width: 750px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 50px;
    }

    .maintext {
        text-align: center;
        color: white;
    }
    .footer {
        margin-top: 40px;
    }

    .wheresearch {
        width: 950px;
        margin: 0 auto;
    }

    #vue {
        font-family: "Helvetica", Arial, sans-serif;
        margin: 1em auto;
        max-width: 500px;
    }
    #vue h2 {
        font-weight: normal;
        color: white;
    }
    #vue .input-select {
        position: relative;
        display: inline-block;
        width: 100%;
    }
    #vue .input-select label {
        display: inline-block;
        width: 100%;
        font-size: 0.75em;
        color:white;
    }
    #vue .input-select select {
        padding-right: 1.875em;
        cursor: pointer;
        color: #000;
        height: 40px;
        padding-bottom: 8px;
        border-radius: 2px;
        appearance: none;
        position: relative;
        background-color: #fff;
        color: #000;
        font-size: 100%;
        padding: 0.625em 0.5em;
        border: 1px solid #d2d2d2;
        width: 100%;
    }
    #vue span {
        padding-top: 1em;
    }
</style>