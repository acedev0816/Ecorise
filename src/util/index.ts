export const reduceHexAddress = (strAddress: string | undefined, nDigits: number) =>
    strAddress
        ? `${strAddress.substring(0, 2 + nDigits)}...${strAddress.substring(
              strAddress.length - nDigits,
              strAddress.length
          )}`
        : '';