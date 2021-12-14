var countries_datatable = [['ISO2','Country name', 'Indicator (combined)', 'Indicator(ex situ)', 'Indicator(in situ)'],
['AW', "Aruba", 0, 0, 33.3333333333333],
['AF', "Afghanistan", 2.29007633587786, 3.30788804071247, 39.6946564885496],
['AO', "Angola", 2.67062314540059, 2.37388724035608, 48.9614243323442],
['AI', "Anguilla", 0, 0, 90.9090909090909],
['AL', "Albania", 1.41732283464567, 1.41732283464567, 82.6771653543307],
['AD', "Andorra", 0, 0, 100],
['AE', "United Arab Emirates", 0, 0, 18.75],
['AR', "Argentina", 4.03458213256484, 3.7463976945245, 56.7723342939481],
['AM', "Armenia", 3.95010395010395, 4.57380457380457, 65.6964656964657],
['AG', "Antigua and Barbuda", 0.793650793650794, 0.793650793650794, 87.3015873015873],
['AU', "Australia", 0.94876660341556, 0.189753320683112, 52.7514231499051],
['AT', "Austria", 0.35650623885918, 0, 90.3743315508021],
['AZ', "Azerbaijan", 2.28136882129278, 3.2319391634981, 65.0190114068441],
['BI', "Burundi", 3.30578512396694, 3.30578512396694, 42.9752066115703],
['BE', "Belgium", 0.235294117647059, 0, 93.4117647058823],
['BJ', "Benin", 0.980392156862745, 0.980392156862745, 41.1764705882353],
['BF', "Burkina Faso", 0, 0, 29.7619047619048],
['BD', "Bangladesh", 0.775193798449612, 0.775193798449612, 13.953488372093],
['BG', "Bulgaria", 1.33729569093611, 1.93164933135215, 78.7518573551263],
['BH', "Bahrain", 0, 0, 26.6666666666667],
['BS', "Bahamas", 0.819672131147541, 0.819672131147541, 77.0491803278689],
['BA', "Bosnia and Herzegovina", 0.387596899224806, 0, 89.922480620155],
['BY', "Belarus", 0, 0, 90.6005221932115],
['BZ', "Belize", 1.04529616724739, 0.696864111498258, 86.411149825784],
['BM', "Bermuda", 0, 0, 59.0909090909091],
['BO', "Bolivia - Plurinational State of ", 4.78260869565217, 4.1304347826087, 75.4347826086957],
['BR', "Brazil", 1.15774240231548, 1.01302460202605, 68.1620839363242],
['BB', "Barbados", 0, 0, 85.7142857142857],
['BN', "Brunei Darussalam", 0, 1.85185185185185, 16.6666666666667],
['BT', "Bhutan", 0.740740740740741, 0.987654320987654, 20],
['BW', "Botswana", 5.50847457627119, 4.23728813559322, 48.728813559322],
['CF', "Central African Republic", 1.60427807486631, 1.60427807486631, 48.6631016042781],
['CA', "Canada", 0, 0.189753320683112, 44.7817836812144],
['CC', "Cocos - Keeling Islands", 0, 0, 0],
['CH', "Switzerland", 0, 0, 92.1259842519685],
['CL', "Chile", 6.4, 5.6, 47.2],
['CN', "China", 0.925449871465296, 1.90231362467866, 17.5835475578406],
['CI', "C�te d'Ivoire", 1.52905198776758, 1.52905198776758, 51.6819571865443],
['CM', "Cameroon", 1.75879396984925, 1.75879396984925, 48.7437185929648],
['CD', "Democratic Republic of the Congo", 2.7431421446384, 2.24438902743142, 52.3690773067332],
['CG', "Congo", 2.38095238095238, 2.38095238095238, 54.7619047619048],
['CK', "Cook Islands", 0, 0, 10],
['CO', "Colombia", 2.38095238095238, 1.98412698412698, 81.1507936507936],
['KM', "Comoros", 0, 0, 31.1111111111111],
['CV', "Cabo Verde", 0, 2.32558139534884, 41.8604651162791],
['CR', "Costa Rica", 1.6, 1.33333333333333, 86.4],
['CU', "Cuba", 1.16279069767442, 0.775193798449612, 79.0697674418605],
['CX', "Christmas Island", 0, 0, 16.6666666666667],
['KY', "Cayman Islands", 0, 0, 86.7924528301887],
['CY', "Cyprus", 1.98675496688742, 2.98013245033113, 63.2450331125828],
['CZ', "Czechia", 0.819672131147541, 0.273224043715847, 89.0710382513661],
['DE', "Germany", 0.184162062615101, 0, 91.7127071823204],
['DJ', "Djibouti", 0, 0, 29.0322580645161],
['DM', "Dominica", 0, 0, 92.1875],
['DK', "Denmark", 0.273224043715847, 0, 92.6229508196721],
['DO', "Dominican Republic", 0.714285714285714, 0.714285714285714, 86.4285714285714],
['DZ', "Algeria", 1.62932790224033, 2.24032586558045, 72.0977596741344],
['EC', "Ecuador", 3.40136054421769, 2.72108843537415, 79.5918367346939],
['EG', "Egypt", 2.27272727272727, 3.24675324675325, 49.025974025974],
['ER', "Eritrea", 1.65289256198347, 1.65289256198347, 34.7107438016529],
['EH', "Western Sahara", 0, 50, 0],
['ES', "Spain", 1.39416983523447, 1.14068441064639, 82.8897338403042],
['EE', "Estonia", 0, 0.301204819277108, 90.0602409638554],
['ET', "Ethiopia", 3.38028169014084, 3.38028169014084, 42.8169014084507],
['FI', "Finland", 0, 0, 91.4191419141914],
['FJ', "Fiji", 0, 0, 28.169014084507],
['FK', "Falkland Islands - Malvinas", 0, 0, 100],
['FR', "France", 1.15681233933162, 0.89974293059126, 86.2467866323908],
['FO', "Faroe Islands", 0, 0, 95.4545454545455],
['FM', "Micronesia - Federated States of", 0, 0, 18.0327868852459],
['GA', "Gabon", 2.57731958762887, 2.57731958762887, 62.3711340206186],
['GB', "United Kingdom of Great Britain and Northern Ireland", 0.72289156626506, 0.481927710843374, 92.0481927710843],
['GE', "Georgia", 2.21327967806841, 2.41448692152917, 72.0321931589537],
['GH', "Ghana", 1.91256830601093, 1.91256830601093, 48.0874316939891],
['GI', "Gibraltar", 0, 0, 100],
['GN', "Guinea", 1.6, 1.6, 50.8],
['GP', "Guadeloupe", 0.571428571428571, 0.571428571428571, 85.7142857142857],
['GM', "Gambia", 0, 0, 43.0769230769231],
['GW', "Guinea-Bissau", 0, 0, 50.9554140127389],
['GQ', "Equatorial Guinea", 0.819672131147541, 0.819672131147541, 59.0163934426229],
['GR', "Greece", 2.62793914246196, 3.18118948824343, 74.5504840940526],
['GD', "Grenada", 0.833333333333333, 0.833333333333333, 87.5],
['GL', "Greenland", 0, 0, 90.2439024390244],
['GT', "Guatemala", 2.75862068965517, 2.75862068965517, 77.4712643678161],
['GF', "French Guiana", 1.5625, 0.78125, 88.671875],
['GU', "Guam", 0, 0, 4.54545454545455],
['GY', "Guyana", 1.9672131147541, 1.31147540983607, 88.1967213114754],
['HK', "China Hong Kong Special Administrative Region", 0, 0, 8.51063829787234],
['HN', "Honduras", 1.36239782016349, 1.36239782016349, 84.4686648501362],
['HR', "Croatia", 0.21505376344086, 0.21505376344086, 84.3010752688172],
['HT', "Haiti", 0.87719298245614, 0.87719298245614, 85.9649122807018],
['HU', "Hungary", 0.191204588910134, 0, 88.527724665392],
['ID', "Indonesia", 0.476758045292014, 0.715137067938021, 19.3087008343266],
['IN', "India", 0.766871165644172, 0.843558282208589, 20.398773006135],
['IE', "Ireland", 0.66006600660066, 0.66006600660066, 92.4092409240924],
['IR', "Iran - Islamic Republic of", 3.1986531986532, 4.54545454545455, 49.6632996632997],
['IQ', "Iraq", 3.84615384615385, 5.91715976331361, 47.9289940828402],
['IS', "Iceland", 0, 0, 96.25],
['IL', "Israel", 3.14285714285714, 4.57142857142857, 54.8571428571429],
['IT', "Italy", 1.33657351154313, 1.45808019441069, 81.6524908869988],
['JM', "Jamaica", 0.48780487804878, 0.48780487804878, 83.4146341463415],
['JO', "Jordan", 2.56410256410256, 3.84615384615385, 53.8461538461538],
['JP', "Japan", 1.72684458398744, 1.25588697017268, 33.9089481946625],
['KZ', "Kazakhstan", 1.52671755725191, 3.05343511450382, 54.1984732824427],
['KE', "Kenya", 3.73831775700935, 3.27102803738318, 46.2616822429907],
['KG', "Kyrgyzstan", 2.44648318042813, 3.97553516819572, 51.3761467889908],
['KH', "Cambodia", 0.552486187845304, 0.828729281767956, 17.6795580110497],
['KI', "Kiribati", 0, 0, 25],
['KN', "Saint Kitts and Nevis", 0, 0, 91.5492957746479],
['KR', "Republic of Korea", 6.25, 6.25, 27.0833333333333],
['KW', "Kuwait", 6.45161290322581, 6.45161290322581, 25.8064516129032],
['LA', "Lao People's Democratic Republic", 0.678733031674208, 0.452488687782805, 15.6108597285068],
['LB', "Lebanon", 3.1331592689295, 4.69973890339426, 61.6187989556136],
['LR', "Liberia", 2.4390243902439, 2.4390243902439, 60.4878048780488],
['LY', "Libya", 2.22222222222222, 2.96296296296296, 58.5185185185185],
['LC', "Saint Lucia", 0.78740157480315, 0.78740157480315, 88.9763779527559],
['LI', "Liechtenstein", 0, 0, 80],
['LK', "Sri Lanka", 1.03950103950104, 1.03950103950104, 19.5426195426195],
['LS', "Lesotho", 2.85714285714286, 2.85714285714286, 45.7142857142857],
['LT', "Lithuania", 0, 0.280898876404494, 90.4494382022472],
['LU', "Luxembourg", 0, 0, 85.7142857142857],
['LV', "Latvia", 0, 0, 91.6167664670659],
['MO', "China Macao Special Administrative Region", 0, 0, 0],
['MA', "Morocco", 1.61616161616162, 2.02020202020202, 76.1616161616162],
['MD', "Republic of Moldova", 0.273224043715847, 0.546448087431694, 83.0601092896175],
['MG', "Madagascar", 0.961538461538462, 0.961538461538462, 33.1730769230769],
['MV', "Maldives", 0, 0, 42.8571428571429],
['MX', "Mexico", 2.05066344993969, 1.68878166465621, 62.4849215922799],
['MH', "Marshall Islands", 0, 0, 28.5714285714286],
['MK', "The former Yugoslav Republic of Macedonia", 0.813008130081301, 1.21951219512195, 83.739837398374],
['ML', "Mali", 1.44230769230769, 1.44230769230769, 35.5769230769231],
['MT', "Malta", 0, 4.34782608695652, 69.5652173913043],
['MM', "Myanmar", 0.752823086574655, 0.752823086574655, 14.3036386449184],
['ME', "Montenegro", 0.395256916996047, 0.395256916996047, 89.7233201581028],
['MN', "Mongolia", 1.01351351351351, 2.7027027027027, 43.9189189189189],
['MP', "Northern Mariana Islands", 0, 0, 25],
['MZ', "Mozambique", 2.76243093922652, 1.93370165745856, 47.7900552486188],
['MR', "Mauritania", 1.58730158730159, 1.58730158730159, 25.3968253968254],
['MS', "Montserrat", 0, 0, 89.1304347826087],
['MQ', "Martinique", 0.571428571428571, 0.571428571428571, 88.5714285714286],
['MU', "Mauritius", 0, 0, 36.7816091954023],
['MW', "Malawi", 3.02013422818792, 2.3489932885906, 50.6711409395973],
['MY', "Malaysia", 0.806451612903226, 1.0752688172043, 17.3387096774194],
['NA', "Namibia", 4.40528634361234, 3.52422907488987, 53.3039647577093],
['NC', "New Caledonia", 1.75438596491228, 0, 28.0701754385965],
['NE', "Niger", 1.49253731343284, 1.49253731343284, 27.6119402985075],
['NG', "Nigeria", 1.8140589569161, 1.8140589569161, 46.9387755102041],
['NI', "Nicaragua", 1.63487738419619, 1.36239782016349, 85.558583106267],
['NU', "Niue", 0, 0, 16.6666666666667],
['NL', "Netherlands", 0, 0, 92.7680798004988],
['NO', "Norway", 0, 0, 90.8309455587392],
['NP', "Nepal", 0.66006600660066, 0.66006600660066, 24.2574257425743],
['NR', "Nauru", 0, 0, 50],
['NZ', "New Zealand", 0, 0, 90],
['OM', "Oman", 0, 0, 24.4444444444444],
['PK', "Pakistan", 1.58730158730159, 1.7636684303351, 33.3333333333333],
['PA', "Panama", 1.42450142450142, 1.13960113960114, 85.7549857549858],
['PN', "Pitcairn", 0, 0, 33.3333333333333],
['PE', "Peru", 4.94505494505495, 5.31135531135531, 74.5421245421245],
['PH', "Philippines", 0.37593984962406, 0.56390977443609, 22.5563909774436],
['PW', "Palau", 0, 0, 21.0526315789474],
['PG', "Papua New Guinea", 0.29673590504451, 0.890207715133531, 18.9910979228487],
['PL', "Poland", 0, 0, 90.4276985743381],
['PR', "Puerto Rico", 0.452488687782805, 0.904977375565611, 83.710407239819],
['KP', "Democratic People's Republic of Korea", 0, 6.66666666666667, 16.6666666666667],
['PT', "Portugal", 1.70454545454545, 1.51515151515152, 83.1439393939394],
['PY', "Paraguay", 1.85185185185185, 1.11111111111111, 60.3703703703704],
['PS', "State of Palestine", 0, 0, 0],
['PF', "French Polynesia", 0, 0, 12.5],
['QA', "Qatar", 0, 0, 21.4285714285714],
['RE', "R�union", 0, 0, 37.2549019607843],
['RO', "Romania", 0.483091787439614, 0.483091787439614, 82.6086956521739],
['RU', "Russian Federation", 1.87590187590188, 3.75180375180375, 50.2164502164502],
['RW', "Rwanda", 2.73972602739726, 2.73972602739726, 47.945205479452],
['SA', "Saudi Arabia", 0.657894736842105, 1.97368421052632, 30.9210526315789],
['SD', "Sudan", 2.5, 2.8125, 39.6875],
['SN', "Senegal", 1.79856115107914, 1.79856115107914, 43.8848920863309],
['SG', "Singapore", 0, 0, 12.0689655172414],
['SH', "Saint Helena", 0, 0, 25],
['SJ', "Svalbard and Jan Mayen Islands", 0, 0, 95],
['SB', "Solomon Islands", 0, 1.11111111111111, 22.2222222222222],
['SL', "Sierra Leone", 2.2140221402214, 2.2140221402214, 54.6125461254613],
['SV', "El Salvador", 1.49812734082397, 1.49812734082397, 83.5205992509363],
['SO', "Somalia", 1.51515151515152, 1.51515151515152, 33.8383838383838],
['PM', "Saint Pierre and Miquelon", 0, 0, 58.8235294117647],
['RS', "Serbia", 0.25706940874036, 0.25706940874036, 83.8046272493573],
['SS', "South Sudan", 2.5, 2.8125, 39.6875],
['ST', "Sao Tome and Principe", 2.5, 2.5, 60],
['SR', "Suriname", 1.0989010989011, 0.732600732600733, 88.2783882783883],
['SK', "Slovakia", 0.271739130434783, 0, 88.5869565217391],
['SI', "Slovenia", 0.248756218905473, 0.248756218905473, 88.8059701492537],
['SE', "Sweden", 0, 0, 91.304347826087],
['SZ', "Swaziland", 2.5, 1.5, 44.5],
['SC', "Seychelles", 0, 0, 31.9148936170213],
['SY', "Syrian Arab Republic", 2.96296296296296, 5.18518518518519, 56.7901234567901],
['TC', "Turks and Caicos Islands", 0, 0, 33.3333333333333],
['TD', "Chad", 2.38095238095238, 2.38095238095238, 28.5714285714286],
['TG', "Togo", 1.80995475113122, 1.80995475113122, 46.606334841629],
['TH', "Thailand", 0.643500643500644, 0.772200772200772, 16.988416988417],
['TJ', "Tajikistan", 2.57352941176471, 3.67647058823529, 51.4705882352941],
['TM', "Turkmenistan", 1.77935943060498, 3.91459074733096, 47.3309608540925],
['TL', "Timor-Leste", 0, 0, 0],
['TO', "Tonga", 0, 0, 20.8333333333333],
['TT', "Trinidad and Tobago", 1.61290322580645, 1.61290322580645, 85.4838709677419],
['TN', "Tunisia", 1.89189189189189, 2.16216216216216, 74.5945945945946],
['TR', "Turkey", 3.15533980582524, 5.09708737864078, 61.8932038834951],
['TW', "Tuvalu", 0.696864111498258, 0.522648083623693, 21.602787456446],
['TZ', "United Republic of Tanzania", 3.21931589537223, 2.61569416498994, 50.3018108651911],
['UG', "Uganda", 2.97766749379653, 2.23325062034739, 49.8759305210918],
['UA', "Ukraine", 0.78125, 0.9375, 80.46875],
['UM', "United States Minor Outlying Islands", 0, 0, 0],
['UY', "Uruguay", 0, 0.694444444444444, 55.5555555555556],
['US', "United States of America", 0.858778625954199, 1.04961832061069, 46.7557251908397],
['UZ', "Uzbekistan", 1.70212765957447, 4.25531914893617, 44.2553191489362],
['VC', "Saint Vincent and the Grenadines", 0.714285714285714, 0.714285714285714, 89.2857142857143],
['VE', "Venezuela - Bolivarian Republic of", 1.80995475113122, 1.35746606334842, 87.7828054298643],
['VG', "British Virgin Islands", 0, 0, 88.5245901639344],
['VI', "United States Virgin Islands", 0, 0, 84.2105263157895],
['VN', "Viet Nam", 0.547195622435021, 0.683994528043776, 13.953488372093],
['VU', "Vanuatu", 0, 0, 34.6153846153846],
['WF', "Wallis and Futuna Islands", 0, 0, 0],
['WS', "Samoa", 0, 0, 27.2727272727273],
['YE', "Yemen", 1.65745856353591, 1.65745856353591, 30.939226519337],
['ZA', "South Africa", 2.51889168765743, 2.01511335012594, 49.1183879093199],
['ZM', "Zambia", 3.11526479750779, 2.49221183800623, 52.6479750778816],
['ZW', "Zimbabwe", 3.36391437308868, 2.44648318042813, 50.7645259938838]];