const quizData = [
    {
        question: "What does the term 'normals' refer to in climatology?",
        options: [
            "Extreme weather events",
            "Variability range of weather variables",
            "Mean or expected values of weather variables over long periods",
            "Rate of incidence of extreme weather phenomena",
            "Mean or expected values of weather variables over short periods",
            "The standard deviation of weather variables over a specific period"
        ],
        answer: "Mean or expected values of weather variables over long periods",
        explanation: "Normals provide a baseline for understanding typical weather conditions."
    },
    {
        question: "How has the concentration of CO2 in the atmosphere changed since 1750?",
        options: [
            "Decreased significantly",
            "Remained constant",
            "Increased significantly",
            "Fluctuated randomly",
            "Decreased initially and then sharply increased"
        ],
        answer: "Increased significantly",
        explanation: "CO2 levels have risen dramatically due to industrial activities."
    },
    {
        question: "Which of the following are zones that least influence climate? (Select all that apply)",
        options: [
            "The Troposphere",
            "The Hydrosphere",
            "The Mesosphere",
            "The Cryosphere",
            "The Biosphere",
            "The Lithosphere"
        ],
        answer: "The Mesosphere",
        explanation: "The mesosphere has minimal direct influence on weather and climate."
    },
    {
        question: "How does climate change affect agricultural production? (Select all that apply)",
        options: [
            "Increase in crop yield",
            "Rise in crop failures",
            "Expansion of arable land",
            "Decrease in water availability for irrigation"
        ],
        answer: "Rise in crop failures, Decrease in water availability for irrigation",
        explanation: "Climate change can lead to droughts and crop failures."
    },
    {
        question: "The mean global surface temperature has increased by about _____ over 1850-2020 values. (Fill in the Blanks with the correct answer)",
        options: [
            "0.4 °C",
            "0.8 °C",
            "1.2 °C",
            "1.6 °C"
        ],
        answer: "1.2 °C",
        explanation: "The global temperature has risen due to climate change."
    },
    {
        question: "What is meant by the term lapse rate?",
        options: [
            "Rate of decrease of pressure with altitude",
            "Rate of decrease of temperature with altitude",
            "Rate of decrease of humidity with altitude",
            "Rate of decrease of CO2 concentration with altitude"
        ],
        answer: "Rate of decrease of temperature with altitude",
        explanation: "Lapse rate describes how temperature decreases with altitude."
    },
    {
        question: "The tropopause is characterized by:",
        options: [
            "A positive lapse rate value",
            "A negative lapse rate value",
            "An exponentially increasing lapse rate value",
            "A zero lapse rate value"
        ],
        answer: "A zero lapse rate value",
        explanation: "The tropopause marks the transition between the troposphere and stratosphere."
    },
    {
        question: "The correct sequence of different layers of the atmosphere from the surface of the Earth upwards is:",
        options: [
            "Troposphere, Stratosphere, Thermosphere, Mesosphere",
            "Stratosphere, Troposphere, Thermosphere, Mesosphere",
            "Troposphere, Stratosphere, Mesosphere, Thermosphere",
            "Stratosphere, Troposphere, Mesosphere, Thermosphere"
        ],
        answer: "Troposphere, Stratosphere, Mesosphere, Thermosphere",
        explanation: "This sequence represents the atmospheric layers from the ground up."
    },
    {
        question: "The temperature increase in the Stratosphere is caused by the absorption of ______ radiation by _____ gas molecules.",
        options: [
            "Infrared, carbon dioxide",
            "Ultraviolet, Ozone",
            "Visible, water vapour",
            "Infrared, Ozone"
        ],
        answer: "Ultraviolet, Ozone",
        explanation: "Ozone absorbs UV radiation, warming the stratosphere."
    },
    {
        question: "Given that the tropospheric lapse rate is 6.5 K/km, and the near-surface atmospheric temperature in Delhi is 304 K, the temperature at an altitude of 2 km above Delhi will be _____ K.",
        options: ["291"],
        answer: "291",
        explanation: "Using the lapse rate, the temperature decreases as altitude increases."
    },
    {
        question: "Which of these factors influence the mean annual surface temperature at any location in the world? Select all that apply",
        options: [
            "Altitude",
            "Latitude",
            "Time of day",
            "Season"
        ],
        answer: "Altitude, Latitude",
        explanation: "Altitude and latitude significantly affect temperature."
    },
    {
        question: "If the atmospheric pressure is 101.3 kPa and the temperature is 25°C, what is the density of air? (Use the ideal gas law)",
        options: ["1.19"],
        answer: "1.19",
        explanation: "Using the ideal gas law, you can calculate the density of air."
    },
    {
        question: "The normal force per unit area that a fluid exerts on a surface is called",
        options: [
            "Impulse",
            "Pressure",
            "Gauge pressure",
            "Stress"
        ],
        answer: "Pressure",
        explanation: "Pressure is the correct term for the normal force per unit area exerted by a fluid on a surface."
    },
    {
        question: "Pressure can’t be expressed as",
        options: [
            "N/m²",
            "Pa/m²",
            "atm",
            "mm. of Hg"
        ],
        answer: "Pa/m²",
        explanation: "Pressure units do not include Pa/m²."
    },
    {
        question: "1 atm pressure is equal to",
        options: [
            "101.3 kPa",
            "760 mm of Hg",
            "14.69 psi",
            "All of the mentioned"
        ],
        answer: "All of the mentioned",
        explanation: "1 atm is equivalent to 101.3 kPa, 760 mm Hg, and 14.69 psi."
    },
    {
        question: "In Mars the mean atmospheric temperature is 200 K, its gravitational constant is 3.7 m/s². Martian atmosphere is made entirely of CO₂ (44 gm/mol). The atmospheric scale height of Mars is (closest integral value):",
        options: [
            "10 km",
            "5 km",
            "8 km",
            "2 km"
        ],
        answer: "10 km",
        explanation: "The scale height calculation suggests the closest value as 10 km."
    },
    {
        question: "Atmospheric Scale Height (H) is the height over which pressure decreases by a factor of",
        options: [
            "π",
            "10",
            "e",
            "2"
        ],
        answer: "e",
        explanation: "Atmospheric pressure decreases by a factor of e with the scale height H."
    },
    {
        question: "The ratio of partial pressure of the vapor in the gas mixture and the saturation vapor pressure of the vapor component is called",
        options: [
            "Relative Humidity",
            "Specific Humidity",
            "Dry air pressure",
            "Humidity Ratio"
        ],
        answer: "Relative Humidity",
        explanation: "Relative humidity is defined as the ratio of partial to saturation vapor pressure."
    },
    {
        question: "Which among the following statements is/are correct about Humidity?\n1. It is defined as amount of water vapor present in air.\n2. The capacity of air to absorb water vapor decreases with increase in temperature.\nSelect the correct code from the options given below:",
        options: [
            "Only 1",
            "Only 2",
            "Both 1 & 2",
            "Neither 1 & 2"
        ],
        answer: "Only 1",
        explanation: "Humidity is the amount of water vapor in air, but air's capacity to hold moisture increases with temperature."
    },
    {
        question: "The Relative Humidity of a parcel of air is 0.5. The saturation vapor pressure is 2 KPa. The partial pressure of dry air is 100 KPa. How many grams of vapor is present per kg of dry air?",
        options: [
            "3.11 gm",
            "6.22 gm",
            "12.44 gm",
            "62.2 gm"
        ],
        answer: "6.22 gm",
        explanation: "Relative humidity at 0.5 with a 2 KPa saturation vapor pressure results in 6.22 gm vapor per kg of dry air."
    },
    {
        question: "What is the weight of actual mass of water vapor present in unit mass of air called?",
        options: [
            "Specific Humidity",
            "Humidity Ratio",
            "Relative Humidity",
            "Saturation Specific Humidity"
        ],
        answer: "Specific Humidity",
        explanation: "Specific Humidity refers to the weight of water vapor per unit mass of air."
    },
    {
        question: "A parcel of unsaturated air is cooled at constant pressure till it reaches the temperature at which water starts to condense out of it. We have reached the air’s",
        options: [
            "Saturation Temperature",
            "Adiabatic Temperature",
            "Freezing Temperature",
            "Dew Point Temperature"
        ],
        answer: "Dew Point Temperature",
        explanation: "The dew point is the temperature at which air reaches saturation and condensation begins."
    },
    {
        question: "A saturated parcel of air is cooled from a temperature where saturation vapor pressure is 3 kPa to a temperature where the saturation pressure is 1 kPa. The total pressure is 100 kPa throughout. If the air parcel contains 1 kg of dry air, how much water vapor (in grams) will condense out of this air during the process?",
        options: [
            "6 gm",
            "9 gm",
            "13 gm",
            "26 gm"
        ],
        answer: "13 gm",
        explanation: "The reduction in vapor pressure implies condensation of 13 gm of water vapor."
    },
    {
        question: "The actual temperature of a parcel of air is 300 K. The total pressure is 100 kPa and its vapor pressure is 2 kPa. Its virtual temperature is (nearest integer)",
        options: [
            "302 K",
            "300 K",
            "298 K",
            "305 K"
        ],
        answer: "302 K",
        explanation: "Virtual temperature accounting for vapor pressure is approximately 302 K."
    },
    {
        question: "At 2 km above the atmosphere, the temperature for a parcel of dry air is 10°C and pressure is 800 hPa. What is the potential temperature of this air parcel? (Cp of air 1.005 kJ/kgK and ideal gas constant of air is 0.287 kJ/kgK)",
        options: [
            "290 K",
            "296 K",
            "302 K",
            "308 K"
        ],
        answer: "302 K",
        explanation: "The calculation yields a potential temperature of 302 K."
    },
    {
        question: "Adiabatic lapse rate for an unsaturated parcel of air is",
        options: [
            "Greater than the mean tropospheric lapse rate",
            "Lesser than the mean tropospheric lapse rate",
            "Equal to the mean tropospheric lapse rate",
            "Depends on the latitude of the location"
        ],
        answer: "Greater than the mean tropospheric lapse rate",
        explanation: "The adiabatic lapse rate for unsaturated air is typically greater than the mean tropospheric lapse rate."
    },
    {
        question: "Adiabatic lapse rate of moist air is",
        options: [
            "Greater than adiabatic lapse rate of dry air",
            "Lesser than adiabatic lapse rate of dry air",
            "Equal to adiabatic lapse rate of dry air",
            "Depends on the latitude of the location"
        ],
        answer: "Lesser than adiabatic lapse rate of dry air",
        explanation: "Moist air has a lower adiabatic lapse rate than dry air due to latent heat release."
    },
    {
        question: "A location has an environmental lapse rate of 7 K/km. The moist adiabatic lapse rate is 6 K/km. The atmosphere is",
        options: [
            "Unconditionally stable",
            "Unconditionally unstable",
            "Conditionally stable",
            "None of the above"
        ],
        answer: "Conditionally stable",
        explanation: "The atmosphere is conditionally stable when the environmental lapse rate lies between the moist and dry adiabatic lapse rates."
    },
    {
        question: "Consider the following statements regarding latitudes and longitudes:\n1. Longitudes are angular distance of a place from the equator.\n2. Latitudes are angular distance of a place from the prime meridian.\n\nChoose the incorrect statement(s):",
        options: [
            "Only 1",
            "Only 2",
            "Both 1 and 2",
            "None of the above"
        ],
        answer: "Both 1 and 2",
        explanation: "Both statements are incorrect: latitudes are measured from the equator, and longitudes are measured from the prime meridian."
    },
    {
        question: "What is sun’s declination angle during summer and winter solstice?",
        options: [
            "23.5 degrees & -23.5 degrees",
            "0.53 degrees & 53 degrees",
            "32 minutes & 74 minutes",
            "-23.5 degrees & 66.5 minutes"
        ],
        answer: "23.5 degrees & -23.5 degrees",
        explanation: "During solstices, the sun’s declination angle reaches ±23.5 degrees."
    },
    {
        question: "What is the amount of radiation energy (in Peta Watts) emitted by a planet with a temperature of 30°C? (Emissivity ε = 0.4, diameter of planet = 12800 km, σ = 5.67 × 10⁻⁸ W·m⁻²·K⁻⁴)",
        options: [
            "25 Peta Watts",
            "50 Peta Watts",
            "75 Peta Watts",
            "100 Peta Watts"
        ],
        answer: "50 Peta Watts",
        explanation: "Using the Stefan-Boltzmann law, the approximate radiation emitted is 50 Peta Watts."
    },
    {
        question: "The amount of energy received per unit time on a unit area perpendicular to the sun’s direction at the earth’s mean distance from the sun is called",
        options: [
            "Solar radiation",
            "Solar constant",
            "Intensity of solar radiation",
            "Air Mass"
        ],
        answer: "Intensity of solar radiation",
        explanation: "The intensity of solar radiation refers to the energy received per unit area at a perpendicular angle."
    },
    {
        question: "The average solar irradiance received by Earth on the top of its atmosphere per unit surface area is",
        options: [
            "2600 W/m²",
            "1360 W/m²",
            "670 W/m²",
            "340 W/m²"
        ],
        answer: "1360 W/m²",
        explanation: "The solar constant is approximately 1360 W/m² at the top of Earth’s atmosphere."
    },
    {
        question: "Which effect would be absent on a planet without an atmosphere?",
        options: [
            "Attenuation",
            "Beam spreading",
            "Both of them will be absent",
            "Neither of them will be absent"
        ],
        answer: "Attenuation",
        explanation: "Without an atmosphere, there is no attenuation of light by air particles."
    },
    {
        question: "_____ is the imaginary plane that bisects both the Earth and the Sun.",
        options: [
            "Equatorial plane",
            "Meridional plane",
            "Plane of the ecliptic",
            "Plane of illumination"
        ],
        answer: "Plane of the ecliptic",
        explanation: "The plane of the ecliptic is the imaginary plane intersecting Earth and Sun."
    },
    {
        question: "The axis of the Earth always remains parallel to itself in all its positions along the Earth’s orbit around the Sun. This is called",
        options: [
            "Parallelism",
            "Axial Tilt",
            "Obliquity",
            "Ellipse"
        ],
        answer: "Parallelism",
        explanation: "Parallelism refers to the Earth's axis remaining parallel during its orbit."
    },
    {
        question: "The least hours of daylight received by a location at 50°N latitude is approximately",
        options: [
            "4 hours",
            "6 hours",
            "8 hours",
            "10 hours"
        ],
        answer: "8 hours",
        explanation: "At 50°N, the minimum daylight during winter is roughly 8 hours."
    },
    {
        question: "What is the mean temperature of Earth’s surface today due to global warming?",
        options: [
            "15.2°C",
            "16.4°C",
            "18.4°C",
            "14.8°C",
            "12.5°C"
        ],
        answer: "15.2°C",
        explanation: "The mean surface temperature of Earth is approximately 15.2°C."
    },
    {
        question: "What is the value of the solar irradiance of Venus?",
        options: [
            "1370 W/m²",
            "2200 W/m²",
            "2626 W/m²",
            "3000 W/m²",
            "4000 W/m²"
        ],
        answer: "2626 W/m²",
        explanation: "Venus receives a solar irradiance of approximately 2626 W/m²."
    },
    {
        question: "What does the term 'planetary albedo' represent in the context of Earth's energy balance?",
        options: [
            "The fraction of solar radiation absorbed by the atmosphere",
            "The fraction of solar radiation reflected by the Earth's surface and atmosphere",
            "The total solar radiation received at the top of the atmosphere",
            "The net absorbed radiation by the Earth's surface",
            "The percentage of solar radiation converted into thermal energy"
        ],
        answer: "The fraction of solar radiation reflected by the Earth's surface and atmosphere",
        explanation: "Planetary albedo is the fraction of solar radiation reflected by the Earth's surface and atmosphere."
    },
    {
        question: "Which of the following factors contribute to the mean blackbody emission temperature of Earth?",
        options: [
            "Earth's albedo",
            "Atmospheric absorption",
            "Surface emissivity",
            "Earth's radius"
        ],
        answer: "Earth's albedo",
        explanation: "Earth's albedo impacts the mean blackbody emission temperature by determining the amount of reflected radiation."
    },
    {
        question: "The mean emission temperature of a planet is 280 K. It has two perfectly absorbing isothermal atmospheric layers. What is its surface temperature? (Select closest answer)",
        options: [
            "296 K",
            "318 K",
            "335 K",
            "368 K"
        ],
        answer: "368 K",
        explanation: "The calculated surface temperature with two absorbing layers is approximately 368 K."
    },
    {
        question: "Earth's mean blackbody emission temperature is lower than the surface temperature.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Earth's mean blackbody temperature is indeed lower than the surface temperature due to greenhouse effects."
    },
    {
        question: "The mean albedo of Earth remains constant throughout the year.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Earth's albedo varies due to seasonal changes and different surface conditions."
    },
    {
        question: "Desert regions typically exhibit a positive net energy flux balance.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Desert regions often have a negative net energy flux balance due to high reflection and little absorption."
    },
    {
        question: "The highest incoming solar insolation at the top of the atmosphere on June 20th is at",
        options: [
            "At the Equator",
            "At the 22°N latitude",
            "At the 45°N latitude",
            "At the North Pole"
        ],
        answer: "At the North Pole",
        explanation: "During the summer solstice, the North Pole receives the highest insolation."
    },
    {
        question: "The largest annual daily averaged flux imbalance at the top of the atmosphere is found at the ______?",
        options: [
            "Equator",
            "Subtropics",
            "Around 45° Latitude",
            "At the high latitudes near the Poles"
        ],
        answer: "At the high latitudes near the Poles",
        explanation: "High latitude regions experience the most significant flux imbalance due to seasonal variations."
    },
    {
        question: "Albedo has extremely low value at which of these locations?",
        options: [
            "Deserts",
            "Equatorial Rainforests",
            "Subtropical Oceans",
            "Near the Poles"
        ],
        answer: "Subtropical Oceans",
        explanation: "Subtropical oceans typically have low albedo due to high absorption of solar radiation."
    },
    {
        question: "The poleward energy flux reaches its maximum value at which latitude?",
        options: [
            "Near the equator",
            "In the 10° – 30° latitude region",
            "In the 30° – 50° latitude region",
            "In the 60° – 90° latitude region"
        ],
        answer: "In the 30° – 50° latitude region",
        explanation: "Poleward energy flux peaks between 30° and 50° latitude."
    },
    {
        question: "State True or False: Decrease in the snow cover at the high latitudes will decrease the negative flux imbalance values at these latitudes.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Less snow cover decreases negative flux imbalance as less energy is reflected."
    },
    {
        question: "A planet has blackbody emission temperature of 290 K. But its surface temperature is 311 K. Assuming it has one isothermal atmosphere layer which absorbs a fraction f of the IR radiation emitted by the surface, the value of f is (Select closest value)",
        options: [
            "1",
            "0",
            "0.25",
            "0.5"
        ],
        answer: "0.5",
        explanation: "With an atmosphere layer absorbing 50% of IR radiation, the fraction f is 0.5."
    },
    {
        question: "Which of the following gases contribute significantly to shortwave heating in the stratosphere?",
        options: [
            "Ozone (O₃)",
            "Water vapor (H₂O)",
            "Carbon dioxide (CO₂)",
            "Nitrogen (N₂)"
        ],
        answer: "Ozone (O₃)",
        explanation: "Ozone significantly contributes to shortwave heating in the stratosphere by absorbing UV radiation."
    },
    {
        question: "Water vapor largely determines the lapse rate in the troposphere.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Water vapor influences the lapse rate in the troposphere through latent heat release during condensation."
    },
    {
        question: "Shortwave Radiation contributes both to cooling and heating of the atmospheric layers.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Shortwave radiation primarily contributes to heating, not cooling, in atmospheric layers."
    },
    {
        question: "The shortwave heating rate reaches a peak at the optical depth of 1.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Shortwave heating peaks at an optical depth of 1, where maximum absorption occurs."
    },
    {
        question: "The net upward longwave radiation at a certain frequency is given by F(z)=2z²−15z+150 W/m³ Hz where z is in km from sea level. The volumetric heating rate value for radiation of this frequency 5 km from sea level is (in W/m³ Hz)?",
        options: [
            "+10",
            "–10",
            "+5",
            "-5"
        ],
        answer: "-5",
        explanation: "Calculating the function at 5 km gives a value of -5 W/m³ Hz."
    },
    {
        question: "What is the impact of CO₂ on the temperature profile at both the troposphere and stratosphere according to the radiative transfer model?",
        options: [
            "Decreases temperature by about 10 K in the troposphere and increases it by about 20 K in the stratosphere",
            "Increases temperature by about 10 K in the troposphere and decreases it by about 20 K in the stratosphere",
            "Increases temperature by about 20 K in the troposphere and decreases it by about 10 K in the stratosphere",
            "Decreases temperature by about 20 K in the troposphere and increases it by about 10 K in the stratosphere"
        ],
        answer: "Decreases temperature by about 10 K in the troposphere and increases it by about 20 K in the stratosphere",
        explanation: "CO₂ cools the troposphere by around 10 K and warms the stratosphere by about 20 K due to radiative transfer."
    },
    {
        question: "Why is the temperature lapse rate found to be unconditionally unstable in radiative equilibrium-based temperature profile models?",
        options: [
            "Due to the neglect of convection and latent heat transfers",
            "Due to the neglect of shortwave heating fluxes",
            "Due to the rapid turning of the temperature profile",
            "Because of the presence of greenhouse gases"
        ],
        answer: "Due to the neglect of convection and latent heat transfers",
        explanation: "Ignoring convection and latent heat results in an unstable lapse rate in radiative equilibrium models."
    },
    {
        question: "Using the ground temperature equation Tg=Te[1+τ*g²]^0.25, calculate the ground temperature (Tg) for a scenario where the effective emission temperature (Te) is 255 K and the equivalent optical depth is 4. Choose the closest answer.",
        options: [
            "296 K",
            "316 K",
            "336 K",
            "356 K"
        ],
        answer: "336 K",
        explanation: "Using the equation with Te = 255 K and τ = 4 yields approximately 336 K for ground temperature."
    },
    {
        question: "Which of the following gases contribute most to longwave cooling in the troposphere?",
        options: [
            "CO₂",
            "O₃",
            "N₂",
            "H₂O"
        ],
        answer: "H₂O",
        explanation: "Water vapor is the primary contributor to longwave cooling in the troposphere."
    },
    {
        question: "The vertical temperature profile of the atmosphere under the radiative equilibrium model will lack which feature if O₃ is not considered in it?",
        options: [
            "The turning of the temperature profile above the stratosphere",
            "The linear decrease of the temperature profile in the troposphere",
            "The unconditionally unstable nature of the temperature profile",
            "Matching the temperature of the atmosphere at the ground"
        ],
        answer: "The turning of the temperature profile above the stratosphere",
        explanation: "Ozone's absence would eliminate the turning point above the stratosphere in the temperature profile."
    },
    {
        question: "The high radiative lapse rate makes the atmosphere unstable and hence causes the development of large-scale vertical convective currents that transport additional heat from the lower to the upper troposphere and thus lowering the temperature lapse rate.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "High lapse rates trigger convection, moving heat upward and decreasing the temperature lapse rate."
    },
    {
        question: "Which factors do not contribute to the net upward longwave radiation?",
        options: [
            "Spectral transmittance",
            "Spectral blackbody radiation intensity",
            "Atmospheric temperature",
            "All of them contribute"
        ],
        answer: "All of them contribute",
        explanation: "All listed factors influence the net upward longwave radiation."
    },
    {
        question: "Under radiative equilibrium model, the ground temperature and air temperature just above the ground are the same.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "The ground temperature typically differs from the air temperature immediately above in radiative equilibrium."
    },
    {
        question: "What is the relationship between frequency (v) and wavelength (λ) of electromagnetic waves?",
        options: [
            "v=λ²",
            "v=λ/2",
            "v=c/λ",
            "λ=c/v"
        ],
        answer: "v=c/λ",
        explanation: "The relationship between frequency and wavelength is given by v=c/λ, where c is the speed of light."
    },
    {
        question: "Which of the following statements are true about blackbodies?",
        options: [
            "A blackbody absorbs all radiation incident on its surface.",
            "A blackbody reflects all radiation incident on its surface.",
            "A blackbody is black in color.",
            "All blackbodies emit different amounts of thermal radiation for the same surface temperature."
        ],
        answer: "A blackbody absorbs all radiation incident on its surface.",
        explanation: "A true blackbody absorbs all incident radiation without reflection."
    },
    {
        question: "According to Wien's Law, what is the wavelength (λmax) corresponding to the peak spectral irradiance of a blackbody with a temperature (T) of 300 K? Wien's displacement constant = 2.898×10⁻³ m·K.",
        options: [
            "6.9 μm",
            "9.6 μm",
            "12.6 μm",
            "15.6 μm"
        ],
        answer: "9.6 μm",
        explanation: "Using Wien's Law, the peak wavelength at 300 K is approximately 9.6 μm."
    },
    {
        question: "Which of these factors do not affect the absorption and emission characteristics of the atmosphere?",
        options: [
            "Amount of N₂O in the atmosphere",
            "Amount of N₂ in the atmosphere",
            "Earth’s Surface temperature",
            "Frequency of electromagnetic waves"
        ],
        answer: "Amount of N₂ in the atmosphere",
        explanation: "Nitrogen (N₂) is inert and does not significantly affect atmospheric absorption and emission."
    },
    {
        question: "Which law states that absorption by a layer of the atmosphere is proportional to the spectral intensity of the incident radiation times the mass density of the absorber along the path of the radiation?",
        options: [
            "Lambert-Bouger-Beer Law",
            "Avogadro's Law",
            "Ohm's Law",
            "Coulomb's Law"
        ],
        answer: "Lambert-Bouger-Beer Law",
        explanation: "The Lambert-Bouger-Beer Law describes absorption proportional to intensity and density."
    },
    {
        question: "Which of the following absorbs most radiation between the 15 – 100 μm range of radiation?",
        options: [
            "Oxygen (O₂)",
            "Nitrogen (N₂)",
            "Carbon dioxide (CO₂)",
            "Methane (CH₄)",
            "Water vapor (H₂O)",
            "Nitrous oxide (N₂O)"
        ],
        answer: "Water vapor (H₂O)",
        explanation: "Water vapor absorbs most of the radiation in the 15–100 μm range."
    },
    {
        question: "The normally directed spectral radiation intensity at the top of the atmosphere at a certain frequency is 100 W/m²Hz. The optical depth at ground level for this frequency is 2. What is the spectral radiation intensity received at ground level? (Select closest value)",
        options: [
            "100 W/m²Hz",
            "76 W/m²Hz",
            "36 W/m²Hz",
            "14 W/m²Hz"
        ],
        answer: "14 W/m²Hz",
        explanation: "The spectral intensity decreases based on the optical depth, resulting in 14 W/m²Hz."
    },
    {
        question: "State True or False: The Earth's emission spectrum peaks around 15 μm.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "The Earth's emission spectrum peaks near 15 μm."
    },
    {
        question: "State True or False: The Earth cannot be considered a blackbody in the UV range due to its non-zero albedo.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Earth's albedo affects visible and infrared ranges more than UV."
    },
    {
        question: "Which law states that the fraction of radiation absorbed by a gas will be equal to the fraction of the total blackbody radiation emitted by the same gas?",
        options: [
            "Lambert's Law",
            "Beer's Law",
            "Bouger's Law",
            "Kirchoff’s Law"
        ],
        answer: "Kirchoff’s Law",
        explanation: "Kirchoff's Law states that the absorptivity equals the emissivity for a body in thermal equilibrium."
    },
    {
        question: "Calculate the energy of a photon with a frequency of 5×10¹⁴ Hz. Planck's constant (h) = 6.626×10⁻³⁴ J·s. Select nearest answer in electron volts (eV).",
        options: [
            "1 eV",
            "2 eV",
            "3 eV",
            "4 eV"
        ],
        answer: "2 eV",
        explanation: "The calculated energy of a photon at this frequency is approximately 2 eV."
    },
    {
        question: "Majority of the upward going IR radiation flux is emitted by the top of the troposphere. (True or False)",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "The top of the troposphere emits most of the IR radiation flux."
    },
    {
        question: "50% of the downward going IR flux is emitted at around 5 km from sea level. (True or False)",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "The emission of downward IR flux varies with atmospheric conditions and is not fixed at 5 km."
    },
    {
        question: "Radiation from atmospheric layers contributes to both shortwave and longwave radiation flux. (True or False)",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Atmospheric radiation primarily contributes to longwave flux due to Earth's thermal emission."
    },
    {
        question: "Which of the following forces does NOT drive atmospheric wind circulation?",
        options: [
            "Coriolis Force",
            "Pressure Gradient Force",
            "Frictional Force",
            "Gravitational Force",
            "Magnetic Force"
        ],
        answer: "Magnetic Force",
        explanation: "Magnetic Force does not influence atmospheric wind circulation, unlike Coriolis, Pressure Gradient, Frictional, and Gravitational forces."
    },
    {
        question: "What is the angular speed of the Earth's rotation?",
        options: [
            "3.14×10⁻⁵ rad/s",
            "-5.29×10⁻⁵ rad/s",
            "7.29×10⁻⁵ rad/s",
            "9.29×10⁻⁵ rad/s",
            "11.29×10⁻⁵ rad/s"
        ],
        answer: "7.29×10⁻⁵ rad/s",
        explanation: "The Earth's angular speed of rotation is approximately 7.29×10⁻⁵ rad/s."
    },
    {
        question: "An originally north-moving wind (in the NH) will get tilted to the North-Western direction. Similarly, we can show that a South moving wind will get tilted to the South-Eastern direction.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Due to the Coriolis effect in the Northern Hemisphere, northward-moving winds tilt northwest, while southward-moving winds tilt southeast."
    },
    {
        question: "The formula for the Coriolis parameter is given by which of the following?",
        options: [
            "f=2Ωcosϕ",
            "f=2Ωsinϕ",
            "f=2Ωtanϕ",
            "f=2Ωcotϕ"
        ],
        answer: "f=2Ωsinϕ",
        explanation: "The Coriolis parameter (f) is calculated as f=2Ωsinϕ, where Ω is the Earth's angular speed and ϕ is latitude."
    },
    {
        question: "The pressure gradient force always moves air from high pressure to low pressure.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "The pressure gradient force drives air from high-pressure to low-pressure areas, contributing to wind circulation."
    },
    {
        question: "At which latitude (φ) is the Coriolis force zero?",
        options: [
            "0°",
            "45°",
            "60°",
            "90°"
        ],
        answer: "0°",
        explanation: "The Coriolis force is zero at the equator (0°) because there is no horizontal component to deflect."
    },
    {
        question: "During the NH summer, the ITCZ lies around __________.",
        options: [
            "10°-20°S",
            "20°-30°N",
            "10°-20°N",
            "0°"
        ],
        answer: "10°-20°N",
        explanation: "During the Northern Hemisphere summer, the ITCZ shifts northward to approximately 10°-20°N."
    },
    {
        question: "Which type of wind circulation exists between 30°N and 30°S?",
        options: [
            "Polar cell",
            "Ferrel cell",
            "Hadley cell",
            "Subpolar cell"
        ],
        answer: "Hadley cell",
        explanation: "The Hadley cell is the primary atmospheric circulation pattern between 30°N and 30°S."
    },
    {
        question: "What are the primary surface-level winds in the midlatitudes (30°-60°)?",
        options: [
            "Polar Easterlies",
            "Midlatitude Westerlies",
            "Trade Winds",
            "Subtropical Easterlies"
        ],
        answer: "Midlatitude Westerlies",
        explanation: "The Midlatitude Westerlies are the dominant winds between 30° and 60° latitude."
    },
    {
        question: "The Ferrel cell is described as:",
        options: [
            "Strong and thermally direct",
            "Weak and thermally indirect",
            "Strong and thermally indirect",
            "Weak and thermally direct"
        ],
        answer: "Weak and thermally indirect",
        explanation: "The Ferrel cell is thermally indirect and weaker than other circulation cells."
    },
    {
        question: "During the index cycle, what weather is associated with the northward moving highs?",
        options: [
            "Cold and stormy",
            "Warm and dry",
            "Cold and dry",
            "Warm and stormy"
        ],
        answer: "Warm and dry",
        explanation: "Northward-moving highs during the index cycle are typically associated with warm, dry weather."
    },
    {
        question: "The SE trade winds crossing the equator during JJA are deflected to the right due to the __________ force.",
        options: [
            "Pressure gradient",
            "Frictional",
            "Gravitational",
            "Coriolis"
        ],
        answer: "Coriolis",
        explanation: "The Coriolis force causes the SE trade winds crossing the equator to deflect to the right."
    },

    {
        question: "In the subtropical oceans, the salinity ______ at greater depths.",
        options: [
            "Increases",
            "Decreases",
            "Constant",
            "No Effect"
        ],
        answer: "Decreases",
        explanation: "In subtropical oceans, salinity generally decreases at greater depths due to mixing and thermocline effects."
    },
    {
        question: "The two most important properties of the ocean that determine oceanic circulation are",
        options: [
            "Pressure and temperature",
            "Density and pressure",
            "Humidity and salinity",
            "Temperature and salinity"
        ],
        answer: "Temperature and salinity",
        explanation: "Temperature and salinity are critical in determining the density of seawater, which drives oceanic circulation."
    },
    {
        question: "The depth over which wind driven surface currents are generated is also called the ____.",
        options: [
            "Ekman transport",
            "Sverdrup",
            "Ekman layer",
            "Ekman velocity flux"
        ],
        answer: "Ekman layer",
        explanation: "The Ekman layer refers to the depth where wind-driven currents primarily affect water movement."
    },
    {
        question: "Which of the following defines thermohaline circulation?",
        options: [
            "A wind-driven oceanic circulation that occurs primarily near the coastlines of continents.",
            "A large-scale ocean circulation that is driven by global wind patterns and the Earth's rotation.",
            "A circulation pattern in the ocean that is driven by differences in water temperature and salinity, involving the sinking of cold, salty water and the rising of warm, less salty water.",
            "A small-scale ocean current system that primarily affects surface water movements in the tropical regions."
        ],
        answer: "A circulation pattern in the ocean that is driven by differences in water temperature and salinity, involving the sinking of cold, salty water and the rising of warm, less salty water.",
        explanation: "Thermohaline circulation is driven by temperature and salinity differences, affecting global climate."
    },
    {
        question: "Which of the following describes the Walker Circulation?",
        options: [
            "A large-scale atmospheric circulation pattern involving the rising of warm air near the equator and the sinking of cold air at the poles.",
            "A large-scale oceanic current that circulates water between the equator and the poles.",
            "An atmospheric circulation pattern in the tropics in the meridional direction, involving the rising of warm air near the Equator and the sinking of cold air near the subtropics and associated with the surface level Trade Winds.",
            "An atmospheric circulation pattern in the tropical Pacific Ocean, characterized by the zonal movement of air along the equator, involving the rising of warm air over the western Pacific and sinking of cooler air over the eastern Pacific."
        ],
        answer: "An atmospheric circulation pattern in the tropical Pacific Ocean, characterized by the zonal movement of air along the equator, involving the rising of warm air over the western Pacific and sinking of cooler air over the eastern Pacific.",
        explanation: "The Walker Circulation is crucial for understanding climatic patterns in the Pacific Ocean."
    },
    {
        question: "Which of the following describes an Equatorial Kelvin Wave?",
        options: [
            "A type of radially outward directed oceanic water transport caused by the anti-cyclonic high pressure systems over the subtropical oceans.",
            "A type of atmospheric wave that moves poleward from the equator, affecting weather patterns in the mid-latitudes associated with the index cycle.",
            "A type of oceanic and atmospheric wave that propagates across the equator in the meridional direction, influenced by the Coriolis effect and the changing location of the ITCZ, and is the cause of the monsoon system.",
            "A large-scale pool of warm water that moves eastward across the equatorial Pacific during El Nino conditions and is typically associated with changes in sea surface temperature and pressure."
        ],
        answer: "A large-scale pool of warm water that moves eastward across the equatorial Pacific during El Nino conditions and is typically associated with changes in sea surface temperature and pressure.",
        explanation: "Equatorial Kelvin Waves are significant in influencing the El Niño phenomenon."
    },
    {
        question: "Which of the following defines ENSO (El Niño-Southern Oscillation)?",
        options: [
            "A regular, predictable weather pattern that affects only the Atlantic Ocean, causing consistent seasonal changes.",
            "A climate phenomenon characterized by periodic fluctuations in sea surface temperatures and atmospheric pressure in the central and eastern tropical Pacific Ocean, influencing global weather and climate patterns.",
            "A large-scale ocean current that circulates around Antarctica, affecting only the Southern Hemisphere's weather.",
            "A type of ocean wave that travels across the Pacific Ocean, leading to short-term changes in coastal weather patterns."
        ],
        answer: "A climate phenomenon characterized by periodic fluctuations in sea surface temperatures and atmospheric pressure in the central and eastern tropical Pacific Ocean, influencing global weather and climate patterns.",
        explanation: "ENSO significantly affects global climate and weather patterns."
    },
    {
        question: "A ______ is defined as the difference in the sea level atmospheric pressure between the West Pacific and the East Pacific.",
        options: [
            "Southern Oscillation Index (SOI)",
            "El Niño-Southern Oscillation (ENSO)",
            "La Niña",
            "Trade winds"
        ],
        answer: "Southern Oscillation Index (SOI)",
        explanation: "The Southern Oscillation Index measures the atmospheric pressure difference across the Pacific."
    },
    {
        question: "The ______ is markedly saltier compared to the _____.",
        options: [
            "Atlantic Ocean, Indian Ocean",
            "Atlantic Ocean, Pacific Ocean",
            "Pacific Ocean, Atlantic Ocean",
            "Indian Ocean, Atlantic Ocean"
        ],
        answer: "Atlantic Ocean, Pacific Ocean",
        explanation: "The Atlantic Ocean is generally saltier than the Pacific Ocean."
    },
    {
        question: "Identify whether the statement is correct or not?\nStatement: Salinity varies with both latitude and depth.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Salinity is influenced by both latitude and depth due to evaporation, precipitation, and water mixing."
    },
    {
        question: "Describe Sverdrup in oceanography?",
        options: [
            "A unit of measurement for ocean salinity, indicating the amount of salt in one cubic meter of seawater.",
            "A measure of the volume transport of ocean currents, equivalent to one million cubic meters of water per second.",
            "A term used to describe the temperature gradient in the ocean, indicating the change in temperature with depth.",
            "A unit used to measure the pressure exerted by ocean currents on the seafloor, expressed in Pascals."
        ],
        answer: "A measure of the volume transport of ocean currents, equivalent to one million cubic meters of water per second.",
        explanation: "Sverdrup is used to quantify the flow of ocean currents."
    },
    {
        question: "Which of the following explains the Ekman Spiral?",
        options: [
            "A vertical column of water in the ocean that rotates clockwise in the Northern Hemisphere and counterclockwise in the Southern Hemisphere, caused by the Coriolis effect and wind-driven surface currents.",
            "A horizontal current pattern in the ocean that causes water to move in a straight line from the equator to the poles, driven by differences in water density and temperature.",
            "A phenomenon where oceanic and atmospheric currents create a spiral pattern due to the interaction between wind stress and the Coriolis effect, causing the direction of water flow to change with depth.",
            "A large-scale ocean wave that travels along the equator, affecting sea surface temperatures and weather patterns."
        ],
        answer: "A phenomenon where oceanic and atmospheric currents create a spiral pattern due to the interaction between wind stress and the Coriolis effect, causing the direction of water flow to change with depth.",
        explanation: "The Ekman Spiral describes how surface winds affect water movement at different depths."
    },
    {
        question: "The Cyclonic and anti-cyclonic wind circulations tend to cause a net transport of surface waters away from and towards the centre of the circulation. Is the statement being true or false?",
        options: [
            "False",
            "True"
        ],
        answer: "True",
        explanation: "Cyclonic circulations draw water towards their centers, while anti-cyclonic circulations push water away."
    },
    {
        question: "In a certain region in the NH away from the equator, the surface level winds blow in the east-west direction. The Ekman transport of water will be in the …… direction?",
        options: [
            "East to West",
            "West to East",
            "North to South",
            "South to North"
        ],
        answer: "South to North",
        explanation: "In the Northern Hemisphere, the Ekman transport moves water 90 degrees to the right of the wind direction."
    },
    {
        question: "The solar flux S striking a planet will be inversely proportional to the square of the distance from the planet to the sun. That is, S = kd², where k is constant, and d is the distance in metres. Use data: Distance from Earth to Sun = 150 x 10⁶ km, Solar Constant of Earth S (W/m²) = 1360 W/m², Distance from Mercury to Sun = 58 x 10⁶ km.\n(a) Estimate the solar constant for the planet Mercury. (nearest integer)",
        options: [
            "5100 W/m²",
            "7100 W/m²",
            "9100 W/m²",
            "1110 W/m²"
        ],
        answer: "5100 W/m²",
        explanation: "Using the inverse square law for solar flux, Mercury receives approximately 5100 W/m²."
    },
    {
        question: "(b) Mercury has no atmosphere. Its albedo is 0.15. What is the surface temperature of Mercury in °C (nearest integer)?",
        options: [
            "60 °C",
            "160 °C",
            "320 °C",
            "430 °C"
        ],
        answer: "160 °C",
        explanation: "Calculating with its albedo gives a surface temperature of around 160 °C."
    },
    {
        question: "What is radiative forcing?",
        options: [
            "The process by which radiation from the Earth's surface is absorbed by the atmosphere.",
            "The difference between the sunlight absorbed by the Earth and the energy radiated back to space.",
            "The amount of solar radiation reflected by the Earth's surface.",
            "The decrease in the net upward radiative flux at the tropopause due to change in the value of some climate change driver."
        ],
        answer: "The decrease in the net upward radiative flux at the tropopause due to change in the value of some climate change driver.",
        explanation: "Radiative forcing indicates the change in energy balance in the atmosphere due to external factors."
    },
    {
        question: "How does radiative forcing influence global temperatures?",
        options: [
            "Positive radiative forcing leads to global cooling.",
            "Negative radiative forcing leads to global warming.",
            "Positive radiative forcing leads to global warming.",
            "Radiative forcing has no impact on global temperatures."
        ],
        answer: "Positive radiative forcing leads to global warming.",
        explanation: "Positive radiative forcing causes an increase in global temperatures by enhancing heat retention."
    },
    {
        question: "The simple zero-dimensional energy balance model makes which of the above assumptions?",
        options: [
            "Heat absorption by the ocean is neglected.",
            "Heat transfer between the mixed layer and the deep ocean is neglected.",
            "Earth’s albedo is neglected.",
            "Absorption of LW radiation by absorbing species in the atmosphere is neglected."
        ],
        answer: "Heat transfer between the mixed layer and the deep ocean is neglected.",
        explanation: "This model simplifies the climate system by not accounting for heat exchanges between layers."
    },
    {
        question: "The planet Venus is under runaway greenhouse effect. Its climate feedback parameter value is likely to be:",
        options: [
            "Positive",
            "Negative",
            "Zero",
            "Imaginary"
        ],
        answer: "Positive",
        explanation: "Venus experiences a runaway greenhouse effect, leading to positive climate feedback."
    },
    {
        question: "We have an absorbing species such that a 1 ppm increase in its concentration causes the net downward radiative flux to increase by 0.01 W/m². The concentration of this absorber decreases by 500 ppm. The value of radiative forcing (RF) caused by this change is:",
        options: [
            "– 5 W/m²",
            "+ 5 W/m²",
            "– 2.5 W/m²",
            "+ 2.5 W/m²"
        ],
        answer: "– 5 W/m²",
        explanation: "The decrease of 500 ppm results in a negative radiative forcing of – 5 W/m²."
    },
    {
        question: "For a planet, its climate feedback parameter is 2 W/m²K. However, it is low on water, and hence has a low heat capacity value of 0.1 GJ/m²K. What is this planet’s feedback response time in units of years (nearest integer)? This planet rotates about its sun in 230 days and each day lasts 30 Earth hours.",
        options: [
            "10 years",
            "4 years",
            "2 years",
            "1 year"
        ],
        answer: "1 year",
        explanation: "The feedback response time is approximately 1 year given its low heat capacity."
    },
    {
        question: "What is the limit of spectral transmittance of the troposphere?",
        options: [
            "1 to 1",
            "0 to 1",
            "-1 to 1",
            "0 to 2",
            "-2 to 2"
        ],
        answer: "0 to 1",
        explanation: "The spectral transmittance of the troposphere ranges from 0 to 1, indicating the proportion of radiation transmitted."
    },
    {
        question: "Calculate the Blackbody Radiative Feedback (αBB), for a planet with a blackbody emission temperature Te = 450 K. Choose the nearest integer.",
        options: [
            "5 W/m² K",
            "10 W/m² K",
            "16 W/m² K",
            "21 W/m² K"
        ],
        answer: "21 W/m² K",
        explanation: "The feedback response at this temperature is approximately 21 W/m² K."
    },
    {
        question: "In the year 2050, a sudden climatic change caused the appearance of a constant radiative forcing of – 3 W/m². The climate feedback parameter is 1 W/m²K. If the mean planetary temperature in 2050 was 16°C, what will be the new equilibrium mean planetary temperature due to this radiative forcing in 2150 assuming that the feedback response time is 30 years?",
        options: [
            "11°C",
            "12°C",
            "13°C",
            "14°C"
        ],
        answer: "13°C",
        explanation: "The new equilibrium temperature would be around 13°C after accounting for the radiative forcing."
    },
    {
        question: "In an actual climate system, the net downward energy flux will depend on:",
        options: [
            "The temperature of the climate system and emissivity of the Earth.",
            "The temperature of the climate system, a set of temperature dependent climate variables and a set of temperature independent variables.",
            "Earth-sun distance and Earth’s temperature.",
            "Water vapor feedback and relative humidity.",
            "Pressure gradient force."
        ],
        answer: "The temperature of the climate system, a set of temperature dependent climate variables and a set of temperature independent variables.",
        explanation: "The net downward energy flux is influenced by various factors including temperature and specific climate variables."
    },
    {
        question: "What is the radiative forcing (RF CO2) for doubling CO2 concentration?",
        options: [
            "1.5 W/m²",
            "2.5 W/m²",
            "3.67 W/m²",
            "4.5 W/m²",
            "5.3 W/m²"
        ],
        answer: "3.67 W/m²",
        explanation: "The radiative forcing for doubling CO2 concentration is approximately 3.67 W/m²."
    },
    {
        question: "What is the transmittance value (Γv) when there is complete transmission?",
        options: [
            "0",
            "0.2",
            "0.5",
            "0.8",
            "1"
        ],
        answer: "1",
        explanation: "A transmittance value of 1 indicates complete transmission of radiation."
    },
    {
        question: "How does the change in CO2 concentration affect transmittance (Γv) when Γv is close to 1 or 0?",
        options: [
            "It has a maximal effect",
            "It has a moderate effect",
            "It has a minimal effect",
            "It has no effect at all",
            "It causes an inverse effect"
        ],
        answer: "It has a minimal effect",
        explanation: "Changes in CO2 concentration have minimal effect on transmittance when it is close to 1 or 0."
    },
    {
        question: "Which component of an instrument provides the final readout?",
        options: [
            "Sensor",
            "Transducer",
            "Amplifier",
            "Meter",
            "Data backup device"
        ],
        answer: "Meter",
        explanation: "The meter is the component that displays the final readout of the measurement."
    },
    {
        question: "What does the dynamic range of an instrument refer to?",
        options: [
            "The smallest change in parameter value that is measurable by the instrument",
            "The time it takes for the instrument to respond to a sudden change",
            "The range between the least and greatest values of the parameter that can be measured by the instrument",
            "The accuracy of the instrument compared to a calibration standard",
            "The speed at which the instrument's readings are recorded"
        ],
        answer: "The range between the least and greatest values of the parameter that can be measured by the instrument",
        explanation: "The dynamic range indicates the limits of measurement for an instrument."
    },
    {
        question: "What is the resolution of an instrument with a full-scale range of 100 kPa and a resolution of 0.1% of FS?",
        options: [
            "0.01 kPa",
            "0.1 kPa",
            "1 kPa",
            "10 kPa",
            "100 kPa"
        ],
        answer: "0.1 kPa",
        explanation: "A resolution of 0.1% of a 100 kPa range is 0.1 kPa."
    },
    {
        question: "The full-scale range of an instrument is the ______ value of the parameter that the instrument can detect.",
        options: [
            "smallest",
            "greatest",
            "average",
            "median"
        ],
        answer: "greatest",
        explanation: "The full-scale range indicates the maximum value that an instrument can measure."
    },
    {
        question: "The process of comparing one instrument with another whose response characteristics are known more accurately is called ______.",
        options: [
            "calibration",
            "resolution",
            "amplification",
            "sensitivity",
            "standardization"
        ],
        answer: "calibration",
        explanation: "Calibration is the process of adjusting an instrument based on a known standard."
    },
    {
        question: "What type of uncertainty is characterized by a consistent repeated offset in the measurement?",
        options: [
            "Random uncertainty",
            "Statistical uncertainty",
            "Systemic uncertainty",
            "Dynamic uncertainty",
            "Instrumental uncertainty",
            "Calibration uncertainty"
        ],
        answer: "Systemic uncertainty",
        explanation: "Systemic uncertainty refers to consistent errors in measurements due to a flaw in the measurement system."
    },
    {
        question: "Suppose an instrument takes 25 measurements of a certain variable. The standard deviation of the sample is found to be 4 units. Calculate the standard error of the sample mean.",
        options: [
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8"
        ],
        answer: "0.8",
        explanation: "The standard error (SE) is calculated as SE = standard deviation / √n, which equals 4 / √25 = 0.8."
    },
    {
        question: "Which feature is NOT typically found in Data Acquisition Systems (DAS)?",
        options: [
            "Programmable operation",
            "Multi-way connector block for sensor input",
            "Analog to Digital Conversion (ADC) capability",
            "A Radio Transmitter"
        ],
        answer: "A Radio Transmitter",
        explanation: "A radio transmitter is not a standard feature of Data Acquisition Systems."
    },
    {
        question: "Calculate the response time (τ) in minutes for a Stevenson screen thermometer with an A value of 8.2 and wind speed (U) of 2 m/s.",
        options: [
            "2.4",
            "4.8",
            "5.6",
            "9",
            "12.3"
        ],
        answer: "5.6",
        explanation: "Using the response time formula, the calculated response time is approximately 5.6 minutes."
    },
    {
        question: "State True or False: A humicap has a linear relationship between capacitance change and Relative Humidity Change.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Humicaps typically exhibit a linear relationship between capacitance and relative humidity."
    },
    {
        question: "State True or False: A Kew pattern barometer is a type of Aneroid Barometer.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "A Kew pattern barometer is a type of mercury barometer, not an aneroid barometer."
    },
    {
        question: "True/False: A cup anemometer always rotates in one direction.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "A cup anemometer always rotates in one direction, responding to wind speed."
    },
    {
        question: "True/False: A wind vane always rotates in one direction.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "A wind vane rotates to align with the wind direction and can change direction based on wind shifts."
    },
    {
        question: "In a sonic anemometer, the separation distance is 10 cm. It takes 30 μs for the sound to travel forward and 40 μs for the sound to travel backward. The sound speed in this direction is:- Choose closest integer value.",
        options: [
            "2 m/s",
            "4 m/s",
            "8 m/s",
            "12 m/s"
        ],
        answer: "8 m/s",
        explanation: "The sound speed is calculated using the time difference and distance."
    },
    {
        question: "The angle the wind vane is making with the North is 120° and the cup anemometer reading of wind speed is 6 m/s. Its zonal component value is:-",
        options: [
            "5.2 m/s",
            "-5.2 m/s",
            "3 m/s",
            "-3 m/s"
        ],
        answer: "-5.2 m/s",
        explanation: "The zonal component is calculated using trigonometric functions considering the wind direction."
    },
    {
        question: "A thermopile is usually used to measure:",
        options: [
            "Temperature",
            "Pressure",
            "Precipitation",
            "Radiation"
        ],
        answer: "Radiation",
        explanation: "A thermopile is used to measure thermal radiation by converting temperature differences to electrical signals."
    },
    {
        question: "An instrument used to measure direct beam solar radiation is:-",
        options: [
            "Pyrheliometer",
            "Pyranometer",
            "Photometer",
            "Albedometer",
            "Shade Ring Pyranometer",
            "Pyrradiometer",
            "Pyrgeometer"
        ],
        answer: "Pyrheliometer",
        explanation: "A pyrheliometer measures the direct beam solar radiation."
    },
    {
        question: "An instrument used to measure diffuse solar radiation is:-",
        options: [
            "Pyrheliometer",
            "Pyranometer",
            "Photometer",
            "Albedometer",
            "Shade Ring Pyranometer",
            "Pyrradiometer",
            "Pyrgeometer"
        ],
        answer: "Shade Ring Pyranometer",
        explanation: "The Shade Ring Pyranometer is designed to measure diffuse solar radiation."
    },
    {
        question: "Which of these is not a reason why a glass enclosure is used over a pyranometer sensor?",
        options: [
            "It prevents convection losses from the sensor surface",
            "It prevents thermal radiation losses from the sensor surface",
            "It prevents diffuse shortwave radiation from hitting the sensor surface",
            "It prevents thermal radiation from hitting the sensor surface"
        ],
        answer: "It prevents diffuse shortwave radiation from hitting the sensor surface",
        explanation: "The glass enclosure is not intended to prevent diffuse radiation; it primarily serves to protect the sensor."
    },
    {
        question: "Which of these require a pair of pyranometers to be used?",
        options: [
            "Pyrheliometer",
            "Pyranometer",
            "Photometer",
            "Albedometer",
            "Shade Ring Pyranometer",
            "Pyrradiometer",
            "Pyrgeometer"
        ],
        answer: "Albedometer",
        explanation: "An albedometer requires two pyranometers to measure reflected radiation accurately."
    },
    {
        question: "A polythene sheet covering is used in which instrument?",
        options: [
            "Pyrheliometer",
            "Pyranometer",
            "Photometer",
            "Albedometer",
            "Shade Ring Pyranometer",
            "Pyrradiometer",
            "Pyrgeometer"
        ],
        answer: "Pyrradiometer",
        explanation: "A polythene sheet is used in a pyrradiometer to measure longwave radiation."
    },
    {
        question: "A tipping bucket rain gauge has buckets of 2 mm depth. Over a 3 hour period, it registers 30 pivots in total. What is the average rainfall rate in mm/min?",
        options: [
            "13 mm/min",
            "14 mm/min",
            "12 mm/min",
            "16 mm/min"
        ],
        answer: "13 mm/min",
        explanation: "The average rainfall rate is calculated based on the total volume collected over time."
    },
    {
        question: "A hypsometer measures:",
        options: [
            "Temperature by correlating change in capacitance of a material with temperature.",
            "Pressure by deformation of a diaphragm to external pressure.",
            "Pressure by correlating the change in the boiling point temperature of a liquid with change in pressure.",
            "Temperature through change in e.m.f. induced by a bi-metallic junction."
        ],
        answer: "Pressure by correlating the change in the boiling point temperature of a liquid with change in pressure.",
        explanation: "A hypsometer uses boiling point changes to determine pressure."
    },
    {
        question: "What is the task of a modem in the radiosonde instrument package?",
        options: [
            "Digitizing the analog signal from the sensors.",
            "Transmitting the radio signal",
            "Converting the digital signal to an audio tone",
            "Gathering location data from the GPS signal"
        ],
        answer: "Converting the digital signal to an audio tone",
        explanation: "The modem converts the digital signals from the radiosonde to a format suitable for transmission."
    },
    {
        question: "True/False: Remote Sensing Applications usually measure properties of surfaces.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Remote sensing applications are designed to measure and analyze surface properties from a distance."
    },
    {
        question: "In which of these requirements, one should not use remote sensing or remote sounding technology?",
        options: [
            "Land Surface Temperature Data is to be acquired over the entire Asian Continent over a 10 year time span",
            "Vertical Species concentration profiles over the entire subtropical troposphere is to be acquired over several years.",
            "Very accurate surface air temperature data over a specific geographic location is to be acquired",
            "Distribution of clouds over the Pacific Ocean is required for a period of several years."
        ],
        answer: "Very accurate surface air temperature data over a specific geographic location is to be acquired",
        explanation: "For very precise surface temperature measurements at a specific location, in-situ measurements would be more reliable."
    },
    {
        question: "Which of these are true for Satellites on a sun-synchronous orbit?",
        options: [
            "a and b",
            "a and c",
            "b and c",
            "b and d",
            "c and d",
            "a and d"
        ],
        answer: "b and d",
        explanation: "Satellites in a sun-synchronous orbit cross the same latitude at the same local time, providing extensive coverage of the earth’s surface."
    },
    {
        question: "True/False: Geosynchronous Satellites have excellent spatial resolution.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Geosynchronous satellites tend to have lower spatial resolution compared to low Earth orbit satellites."
    },
    {
        question: "The push broom imaging system is used for:",
        options: [
            "A 2D detector",
            "A linear detector",
            "A 0D detector",
            "A geosynchronous satellite detector"
        ],
        answer: "A linear detector",
        explanation: "Push broom imaging systems utilize a linear array of detectors to capture images."
    },
    {
        question: "In a VNIR image a pixel has high reflectance in the visible region and low reflectance in the near IR region. The region is likely to be:",
        options: [
            "A water body",
            "A snow covered land area",
            "Area covered by green vegetation",
            "A barren land area"
        ],
        answer: "A snow covered land area",
        explanation: "Snow reflects visible light well but absorbs more in the near IR spectrum, indicating snow-covered areas."
    },
    {
        question: "A split window technique is used for:",
        options: [
            "Atmospheric correction for TIR imaging",
            "Atmospheric correction for VNIR imaging",
            "Reflectance correction for Remote Sounding",
            "Emissivity correction for VNIR imaging"
        ],
        answer: "Atmospheric correction for TIR imaging",
        explanation: "The split window technique helps to correct atmospheric effects in thermal infrared imaging."
    },
    {
        question: "Atmospheric sounding for temperature profile is usually done around:",
        options: [
            "4 μm spectral band",
            "8 μm spectral band",
            "12 μm spectral band",
            "15 μm spectral band"
        ],
        answer: "15 μm spectral band",
        explanation: "The 15 μm spectral band is typically used for temperature sounding due to strong emission features."
    },
    {
        question: "Which of these is an active remote sensing/sounding technique?",
        options: [
            "Photodiode based VNIR",
            "Photodiode based TIR",
            "Dobson Ozone Spectrophotometer",
            "LIDAR"
        ],
        answer: "LIDAR",
        explanation: "LIDAR is an active remote sensing technology that uses laser pulses to measure distances."
    },
    {
        question: "Tunable Dye Lasers are used in which one of these Remote Systems?",
        options: [
            "LIDAR",
            "VNIR",
            "Dobson Ozone Spectrophotometer",
            "TIR"
        ],
        answer: "LIDAR",
        explanation: "Tunable dye lasers are commonly used in LIDAR systems for high precision measurements."
    },
    {
        question: "True/False: In RADAR applications, Radiowaves are scattered due to water droplets or ice crystals.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "In RADAR applications, radiowaves are primarily scattered by larger particles and not just water droplets or ice crystals."
    },
    {
        question: "The wavelength of radiation detected by a VNIR system is 1000 nm. The diameter of the lens is 2m and its focal length is 2 km. The photodiode detector size is 1 cm and the satellite is stationed 700 km above the surface of the earth. What is the spatial resolution of this VNIR system in meters?",
        options: [
            "3.5 m",
            "0.35 m",
            "350 m",
            "3500 m"
        ],
        answer: "3.5 m",
        explanation: "The spatial resolution can be calculated based on the optics and altitude of the sensor."
    },
    {
        question: "A TIR imaging system uses the two-look technique to determine the ground brightness temperature. A Nadir view gives the measured brightness temperature to be 300 K and viewing at an angle of 30° with respect to the vertical gives the brightness temperature to be 298 K. The mean atmospheric temperature is 250 K. What is the actual ground brightness temperature in Kelvins? Choose closest value.",
        options: [
            "285 K",
            "305 K",
            "315 K",
            "330 K"
        ],
        answer: "315 K",
        explanation: "Using the two-look technique, the actual ground brightness temperature is calculated to be approximately 315 K."
    },
    {
        question: "True/False: Active Systems measure radiation emitted by natural sources.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "Active systems emit their own energy (e.g., lasers) to measure the environment, unlike passive systems."
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((quizItem, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h3>${index + 1}. ${quizItem.question}</h3>`;
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');

        quizItem.options.forEach(option => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            optionsList.appendChild(listItem);
        });

        // Create "Show Answer" link
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.innerHTML = `<span class="show-answer">Show Answer</span><div class="answer-content">${quizItem.answer} - ${quizItem.explanation}</div>`;
        answerElement.querySelector('.answer-content').style.display = 'none'; // Hide by default

        answerElement.querySelector('.show-answer').addEventListener('click', () => {
            const answerContent = answerElement.querySelector('.answer-content');
            answerContent.style.display = answerContent.style.display === 'none' ? 'block' : 'none';
        });

        questionElement.appendChild(optionsList);
        questionElement.appendChild(answerElement);
        quizContainer.appendChild(questionElement);
    });
}

function checkAnswers() {
    let score = 0;
    let results = '';

    quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === quizItem.answer) {
                score += 1;
                results += `<p>Question ${index + 1}: Correct</p>`;
            } else {
                results += `<p>Question ${index + 1}: Incorrect. Correct answer is: ${quizItem.answer}</p>`;
            }
        } else {
            results += `<p>Question ${index + 1}: No answer selected.</p>`;
        }
    });

    resultContainer.innerHTML = `<h3>Your score: ${score}/${quizData.length}</h3>${results}`;
}

submitButton.addEventListener('click', checkAnswers);

loadQuiz();
