import countryCallingCodes from "country-calling-code";

// Function to generate country options
function generateCountryOptions() {
  const countryOptions = countryCallingCodes.map((country) => ({
    value: country.countryCodes[0], // Assuming you want the first dial code
    label: `${country.country} (+${country.countryCodes[0]})`,
  }));
  return countryOptions;
}

const countryOptions = generateCountryOptions();

export default countryOptions;
