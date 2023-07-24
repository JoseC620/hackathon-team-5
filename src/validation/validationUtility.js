/*
node src/validation/validationUtility.js
to execute

https://bklyndesigns.com/new-york-city-zip-code/

if zipCodeInput valid, validateZipCode *used to* return an object 
e.g. { borough: "Manhattan", neighborhood: "Central Harlem"},
Updated after changing functionality; now returns the zip code string.

else returns null.

Sample "dead spot" 10008
*/

/*
inputToParmas takes a string input, tests to see if number or string.
if number, sends to validateZipCode.
  if valid number, returns similar to "10031": { borough: "Manhattan", neighborhood: "Inwood and Washington Heights" },
  if not valid number, returns null.
if string, sends to validateBorough.
  if valid borough, returns similar to (if "Bronx" was borough) ['10451', '10452', '10453', '10454', '10455', '10456', '10457', '10458', '10459', '10460', '10461', '10462', '10463', '10464', '10465', '10466', '10467', '10468', '10469', '10470', '10471', '10472', '10473', '10474', '10475']
  if not valid borough, returns null.

Returning data allows functionality like, if park not found in a particular zip code, at least
parks in the same borough (though different zip codes) may be searched for.

If borough entered, zip codes are output so viewer may see breakdown by zip code for convenience.
The function may be changed with different regional lists; e.g. add "nearby zip codes" to the
zip code object.

But those return data etc. not implemented for now, as stipulation is "minimal viable product".

==

If we have a null return in validateZipCode or validateBorough, return null for the function.

Otherwise return a function to be invoked in array.filter.  This includes the field
to be filtered by, and an array of eligible zipcodes.

Based on data in

https://dev.socrata.com/foundry/data.cityofnewyork.us/enfh-gkve

borough
Q = Queens
B = Brooklyn
M = Manhattan
X = Bronx
R = Staten Island

So if valid borough, return "borough" and "Q" (or whatever letter represents the borough)

zipcode
So if valid zipcode, return "zipcode" and zipcode.

There is a possibility that a valid zipcode may not have a park in it.  Technically also
true for boroughs, but in practice not an issue (at this time)

*/
const inputToParams = (rawInput) => {
    const validateZipCode = (zipCodeInput) => {
        const zipCodes = {
            "10031": { borough: "Manhattan", neighborhood: "Inwood and Washington Heights" },
            "10032": { borough: "Manhattan", neighborhood: "Inwood and Washington Heights" },
            "10033": { borough: "Manhattan", neighborhood: "Inwood and Washington Heights" },
            "10034": { borough: "Manhattan", neighborhood: "Inwood and Washington Heights" },
            "10040": { borough: "Manhattan", neighborhood: "Inwood and Washington Heights" },
            "10026": { borough: "Manhattan", neighborhood: "Central Harlem" },
            "10027": { borough: "Manhattan", neighborhood: "Central Harlem" },
            "10030": { borough: "Manhattan", neighborhood: "Central Harlem" },
            "10037": { borough: "Manhattan", neighborhood: "Central Harlem" },
            "10039": { borough: "Manhattan", neighborhood: "Central Harlem" },
            "10029": { borough: "Manhattan", neighborhood: "East Harlem" },
            "10035": { borough: "Manhattan", neighborhood: "East Harlem" },
            "10023": { borough: "Manhattan", neighborhood: "Upper West Side" },
            "10024": { borough: "Manhattan", neighborhood: "Upper West Side" },
            "10025": { borough: "Manhattan", neighborhood: "Upper West Side" },
            "10021": { borough: "Manhattan", neighborhood: "Upper East Side" },
            "10028": { borough: "Manhattan", neighborhood: "Upper East Side" },
            "10044": { borough: "Manhattan", neighborhood: "Upper East Side" },
            "10065": { borough: "Manhattan", neighborhood: "Upper East Side" },
            "10075": { borough: "Manhattan", neighborhood: "Upper East Side" },
            "10128": { borough: "Manhattan", neighborhood: "Upper East Side" },
            "10001": { borough: "Manhattan", neighborhood: "Chelsea and Clinton" },
            "10011": { borough: "Manhattan", neighborhood: "Chelsea and Clinton" },
            "10018": { borough: "Manhattan", neighborhood: "Chelsea and Clinton" },
            "10019": { borough: "Manhattan", neighborhood: "Chelsea and Clinton" },
            "10020": { borough: "Manhattan", neighborhood: "Chelsea and Clinton" },
            "10036": { borough: "Manhattan", neighborhood: "Chelsea and Clinton" },
            "10010": { borough: "Manhattan", neighborhood: "Gramercy Park and Murray Hill" },
            "10016": { borough: "Manhattan", neighborhood: "Gramercy Park and Murray Hill" },
            "10017": { borough: "Manhattan", neighborhood: "Gramercy Park and Murray Hill" },
            "10022": { borough: "Manhattan", neighborhood: "Gramercy Park and Murray Hill" },
            "10012": { borough: "Manhattan", neighborhood: "Greenwich Vilage and Soho" },
            "10013": { borough: "Manhattan", neighborhood: "Greenwich Vilage and Soho" },
            "10014": { borough: "Manhattan", neighborhood: "Greenwich Vilage and Soho" },
            "10002": { borough: "Manhattan", neighborhood: "Union Square and Lower East Side" },
            "10003": { borough: "Manhattan", neighborhood: "Union Square and Lower East Side" },
            "10009": { borough: "Manhattan", neighborhood: "Union Square and Lower East Side" },
            "10004": { borough: "Manhattan", neighborhood: "Lower Manhattan" },
            "10005": { borough: "Manhattan", neighborhood: "Lower Manhattan" },
            "10006": { borough: "Manhattan", neighborhood: "Lower Manhattan" },
            "10007": { borough: "Manhattan", neighborhood: "Lower Manhattan" },
            "10038": { borough: "Manhattan", neighborhood: "Lower Manhattan" },
            "10280": { borough: "Manhattan", neighborhood: "Lower Manhattan" },
            "10302": { borough: "Staten Island", neighborhood: "Port Richmond" },
            "10303": { borough: "Staten Island", neighborhood: "Port Richmond" },
            "10310": { borough: "Staten Island", neighborhood: "Port Richmond" },
            "10306": { borough: "Staten Island", neighborhood: "South Beach and Tottenville" },
            "10307": { borough: "Staten Island", neighborhood: "South Beach and Tottenville" },
            "10308": { borough: "Staten Island", neighborhood: "South Beach and Tottenville" },
            "10309": { borough: "Staten Island", neighborhood: "South Beach and Tottenville" },
            "10312": { borough: "Staten Island", neighborhood: "South Beach and Tottenville" },
            "10301": { borough: "Staten Island", neighborhood: "Stapleton and St. George" },
            "10304": { borough: "Staten Island", neighborhood: "Stapleton and St. George" },
            "10305": { borough: "Staten Island", neighborhood: "Stapleton and St. George" },
            "10314": { borough: "Staten Island", neighborhood: "Mid-Island (Willowbrook)" },
            "10463": { borough: "The Bronx", neighborhood: "Kingsbridge and Riverdale" },
            "10471": { borough: "The Bronx", neighborhood: "Kingsbridge and Riverdale" },
            "10466": { borough: "The Bronx", neighborhood: "Northeast Bronx" },
            "10469": { borough: "The Bronx", neighborhood: "Northeast Bronx" },
            "10470": { borough: "The Bronx", neighborhood: "Northeast Bronx" },
            "10475": { borough: "The Bronx", neighborhood: "Northeast Bronx" },
            "10453": { borough: "The Bronx", neighborhood: "Crotana and Tremont" },
            "10457": { borough: "The Bronx", neighborhood: "Crotana and Tremont" },
            "10460": { borough: "The Bronx", neighborhood: "Crotana and Tremont" },
            "10458": { borough: "The Bronx", neighborhood: "Bronx Park and Fordham" },
            "10467": { borough: "The Bronx", neighborhood: "Bronx Park and Fordham" },
            "10468": { borough: "The Bronx", neighborhood: "Bronx Park and Fordham" },
            "10461": { borough: "The Bronx", neighborhood: "Pelham and Throgs Neck" },
            "10462": { borough: "The Bronx", neighborhood: "Pelham and Throgs Neck" },
            "10464": { borough: "The Bronx", neighborhood: "Pelham and Throgs Neck" },
            "10465": { borough: "The Bronx", neighborhood: "Pelham and Throgs Neck" },
            "10472": { borough: "The Bronx", neighborhood: "Pelham and Throgs Neck" },
            "10473": { borough: "The Bronx", neighborhood: "Pelham and Throgs Neck" },
            "10451": { borough: "The Bronx", neighborhood: "HighBridge and Morrisania" },
            "10452": { borough: "The Bronx", neighborhood: "HighBridge and Morrisania" },
            "10456": { borough: "The Bronx", neighborhood: "HighBridge and Morrisania" },
            "10454": { borough: "The Bronx", neighborhood: "Hunts Point and Mott Haven" },
            "10455": { borough: "The Bronx", neighborhood: "Hunts Point and Mott Haven" },
            "10459": { borough: "The Bronx", neighborhood: "Hunts Point and Mott Haven" },
            "10474": { borough: "The Bronx", neighborhood: "Hunts Point and Mott Haven" },
            "11101": { borough: "Queens", neighborhood: "Long Island City and Astoria" },
            "11102": { borough: "Queens", neighborhood: "Long Island City and Astoria" },
            "11103": { borough: "Queens", neighborhood: "Long Island City and Astoria" },
            "11104": { borough: "Queens", neighborhood: "Long Island City and Astoria" },
            "11105": { borough: "Queens", neighborhood: "Long Island City and Astoria" },
            "11106": { borough: "Queens", neighborhood: "Long Island City and Astoria" },
            "11368": { borough: "Queens", neighborhood: "West Queens" },
            "11369": { borough: "Queens", neighborhood: "West Queens" },
            "11370": { borough: "Queens", neighborhood: "West Queens" },
            "11372": { borough: "Queens", neighborhood: "West Queens" },
            "11373": { borough: "Queens", neighborhood: "West Queens" },
            "11377": { borough: "Queens", neighborhood: "West Queens" },
            "11378": { borough: "Queens", neighborhood: "West Queens" },
            "11354": { borough: "Queens", neighborhood: "North Queens" },
            "11355": { borough: "Queens", neighborhood: "North Queens" },
            "11356": { borough: "Queens", neighborhood: "North Queens" },
            "11357": { borough: "Queens", neighborhood: "North Queens" },
            "11358": { borough: "Queens", neighborhood: "North Queens" },
            "11359": { borough: "Queens", neighborhood: "North Queens" },
            "11360": { borough: "Queens", neighborhood: "North Queens" },
            "11361": { borough: "Queens", neighborhood: "Northeast Queens" },
            "11362": { borough: "Queens", neighborhood: "Northeast Queens" },
            "11363": { borough: "Queens", neighborhood: "Northeast Queens" },
            "11364": { borough: "Queens", neighborhood: "Northeast Queens" },
            "11374": { borough: "Queens", neighborhood: "West Central Queens" },
            "11375": { borough: "Queens", neighborhood: "West Central Queens" },
            "11379": { borough: "Queens", neighborhood: "West Central Queens" },
            "11385": { borough: "Queens", neighborhood: "West Central Queens" },
            "11365": { borough: "Queens", neighborhood: "Central Queens" },
            "11366": { borough: "Queens", neighborhood: "Central Queens" },
            "11367": { borough: "Queens", neighborhood: "Central Queens" },
            "11414": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11415": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11416": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11417": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11418": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11419": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11420": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11421": { borough: "Queens", neighborhood: "Southwest Queens" },
            "11412": { borough: "Queens", neighborhood: "Jamaica" },
            "11423": { borough: "Queens", neighborhood: "Jamaica" },
            "11432": { borough: "Queens", neighborhood: "Jamaica" },
            "11433": { borough: "Queens", neighborhood: "Jamaica" },
            "11434": { borough: "Queens", neighborhood: "Jamaica" },
            "11435": { borough: "Queens", neighborhood: "Jamaica" },
            "11436": { borough: "Queens", neighborhood: "Jamaica" },
            "11004": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11005": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11411": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11413": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11422": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11426": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11427": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11428": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11429": { borough: "Queens", neighborhood: "Southeast Queens" },
            "11691": { borough: "Queens", neighborhood: "Rockaways" },
            "11692": { borough: "Queens", neighborhood: "Rockaways" },
            "11693": { borough: "Queens", neighborhood: "Rockaways" },
            "11694": { borough: "Queens", neighborhood: "Rockaways" },
            "11695": { borough: "Queens", neighborhood: "Rockaways" },
            "11697": { borough: "Queens", neighborhood: "Rockaways" },
            "11211": { borough: "Brooklyn", neighborhood: "Greenpoint" },
            "11222": { borough: "Brooklyn", neighborhood: "Greenpoint" },
            "11201": { borough: "Brooklyn", neighborhood: "Northwest Brooklyn" },
            "11205": { borough: "Brooklyn", neighborhood: "Northwest Brooklyn" },
            "11215": { borough: "Brooklyn", neighborhood: "Northwest Brooklyn" },
            "11217": { borough: "Brooklyn", neighborhood: "Northwest Brooklyn" },
            "11231": { borough: "Brooklyn", neighborhood: "Northwest Brooklyn" },
            "11212": { borough: "Brooklyn", neighborhood: "Central Brooklyn (Bedford Stuyvesant - Crown Heights)" },
            "11213": { borough: "Brooklyn", neighborhood: "Central Brooklyn (Bedford Stuyvesant - Crown Heights)" },
            "11216": { borough: "Brooklyn", neighborhood: "Central Brooklyn (Bedford Stuyvesant - Crown Heights)" },
            "11233": { borough: "Brooklyn", neighborhood: "Central Brooklyn (Bedford Stuyvesant - Crown Heights)" },
            "11238": { borough: "Brooklyn", neighborhood: "Central Brooklyn (Bedford Stuyvesant - Crown Heights)" },
            "11207": { borough: "Brooklyn", neighborhood: "East New York and New Lots" },
            "11208": { borough: "Brooklyn", neighborhood: "East New York and New Lots" },
            "11220": { borough: "Brooklyn", neighborhood: "Sunset Park" },
            "11232": { borough: "Brooklyn", neighborhood: "Sunset Park" },
            "11209": { borough: "Brooklyn", neighborhood: "Southwest Brooklyn" },
            "11214": { borough: "Brooklyn", neighborhood: "Southwest Brooklyn" },
            "11228": { borough: "Brooklyn", neighborhood: "Southwest Brooklyn" },
            "11204": { borough: "Brooklyn", neighborhood: "Borough Park" },
            "11218": { borough: "Brooklyn", neighborhood: "Borough Park" },
            "11219": { borough: "Brooklyn", neighborhood: "Borough Park" },
            "11230": { borough: "Brooklyn", neighborhood: "Borough Park" },
            "11234": { borough: "Brooklyn", neighborhood: "Canarsie and Flatlands" },
            "11236": { borough: "Brooklyn", neighborhood: "Canarsie and Flatlands" },
            "11239": { borough: "Brooklyn", neighborhood: "Canarsie and Flatlands" },
            "11223": { borough: "Brooklyn", neighborhood: "Southern Brooklyn" },
            "11224": { borough: "Brooklyn", neighborhood: "Southern Brooklyn" },
            "11229": { borough: "Brooklyn", neighborhood: "Southern Brooklyn" },
            "11235": { borough: "Brooklyn", neighborhood: "Southern Brooklyn" },
            "11203": { borough: "Brooklyn", neighborhood: "Flatbush" },
            "11210": { borough: "Brooklyn", neighborhood: "Flatbush" },
            "11225": { borough: "Brooklyn", neighborhood: "Flatbush" },
            "11226": { borough: "Brooklyn", neighborhood: "Flatbush" },
            "11206": { borough: "Brooklyn", neighborhood: "Bushwick and WIlliamsburg" },
            "11221": { borough: "Brooklyn", neighborhood: "Bushwick and WIlliamsburg" },
            "11237": { borough: "Brooklyn", neighborhood: "Bushwick and WIlliamsburg" },
        }

        //     const objKeys = Object.keys(zipCodes);
        //     let bronx = [];
        //     let brooklyn = [];
        //     let manhattan = [];
        //     let queens = [];
        //     let staten = [];
        //     for (let i = 0; i < objKeys.length; i++) {
        //         if (zipCodes[objKeys[i]].borough === "The Bronx") {
        //             bronx.push(objKeys[i]);
        //         }
        //         if (zipCodes[objKeys[i]].borough === "Brooklyn") {
        //             brooklyn.push(objKeys[i]);
        //         }
        //         if (zipCodes[objKeys[i]].borough === "Manhattan") {
        //             manhattan.push(objKeys[i]);
        //         }
        //         if (zipCodes[objKeys[i]].borough === "Queens") {
        //             queens.push(objKeys[i]);
        //         }
        //         if (zipCodes[objKeys[i]].borough === "Staten Island") {
        //             staten.push(objKeys[i]);
        //         }
        //     }
        //     console.log("Bronx", bronx);
        //     console.log("Brooklyn", brooklyn);
        //     console.log("Manhattan", manhattan);
        //     console.log("Queens", queens);
        //     console.log("Staten Island", staten);

            if (zipCodes[zipCodeInput]) {
                return zipCodeInput;
            } else {
                return null;
            }
    }

    // validateZipCode();

    const validateBorough = (inputBorough) => {
        const boroughs = {
            "Brooklyn": ['11201', '11203', '11204', '11205', '11206', '11207', '11208', '11209', '11210', '11211', '11212', '11213', '11214', '11215', '11216', '11217', '11218', '11219', '11220', '11221', '11222', '11223', '11224', '11225', '11226', '11228', '11229', '11230', '11231', '11232', '11233', '11234', '11235', '11236', '11237', '11238', '11239'],
            "Manhattan": ['10001', '10002', '10003', '10004', '10005', '10006', '10007', '10009', '10010', '10011', '10012', '10013', '10014', '10016', '10017', '10018', '10019', '10020', '10021', '10022', '10023', '10024', '10025', '10026', '10027', '10028', '10029', '10030', '10031', '10032', '10033', '10034', '10035', '10036', '10037', '10038', '10039', '10040', '10044', '10065', '10075', '10128', '10280'],
            "Queens": ['11004', '11005', '11101', '11102', '11103', '11104', '11105', '11106', '11354', '11355', '11356', '11357', '11358', '11359', '11360', '11361', '11362', '11363', '11364', '11365', '11366', '11367', '11368', '11369', '11370', '11372', '11373', '11374', '11375', '11377', '11378', '11379', '11385', '11411', '11412', '11413', '11414', '11415', '11416', '11417', '11418', '11419', '11420', '11421', '11422', '11423', '11426', '11427', '11428', '11429', '11432', '11433', '11434', '11435', '11436', '11691', '11692', '11693', '11694', '11695', '11697'],
            "Staten Island": ['10301', '10302', '10303', '10304', '10305', '10306', '10307', '10308', '10309', '10310', '10312', '10314'],
            "The Bronx": ['10451', '10452', '10453', '10454', '10455', '10456', '10457', '10458', '10459', '10460', '10461', '10462', '10463', '10464', '10465', '10466', '10467', '10468', '10469', '10470', '10471', '10472', '10473', '10474', '10475'],
            "Bronx": ['10451', '10452', '10453', '10454', '10455', '10456', '10457', '10458', '10459', '10460', '10461', '10462', '10463', '10464', '10465', '10466', '10467', '10468', '10469', '10470', '10471', '10472', '10473', '10474', '10475']
        }
        if (boroughs[inputBorough]) {
            return boroughs[inputBorough]
        } else {
            return null;
        }
    }

    let numReturn = null;
    let strReturn = null;

    const numberRegExp = /^\d+$/;
    if (numberRegExp.test(rawInput)) {
        numReturn = validateZipCode(rawInput);
    } else {
        strReturn = validateBorough(rawInput);
    }
    // Zip code only returns one zip code 
    if (numReturn) {
        return {keyIn: "zipcode", valueIn: numReturn };
    }
    if (strReturn) {
      let returnCode = null;
      if (rawInput === "Bronx") {
        returnCode = "X";
      } else if (rawInput === "The Bronx") {
        returnCode = "X";
      } else if (rawInput === "Brooklyn") {
        returnCode = "B";
      } else if (rawInput === "Manhattan") {
        returnCode = "M";
      } else if (rawInput === "Queens") {
        returnCode = "Q";
      } else if (rawInput === "Staten Island") {
        returnCode = "R";
      }
        return {keyIn: "borough", valueIn: returnCode}
    } else return null;

//     https://dev.socrata.com/foundry/data.cityofnewyork.us/enfh-gkve

// borough
// Q = Queens
// B = Brooklyn
// M = Manhattan
// X = Bronx
// R = Staten Island

// So if valid borough, return "borough" and "Q" (or whatever letter represents the borough)

// zipcode
// So if valid zipcode, return "zipcode" and zipcode.

// There is a possibility that a valid zipcode may not have a park in it.  Technically also
// true for boroughs, but in practice not an issue (at this time)

}

export { inputToParams };