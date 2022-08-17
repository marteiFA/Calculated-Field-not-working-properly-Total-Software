(function(quotes){
  const software = quotes.softwareLines && quotes.softwareLines[0] ? quotes.softwareLines[0] || null: 0;
  const terms = software ? parseInt(software.termsFormatted) || 0 : 0;
  const yearTerms = terms / 12;
  const softwareNetPrice = software ? parseFloat(software.softwareNetPrice) || 0 : 0

  return softwareNetPrice * yearTerms;
}(quotes));