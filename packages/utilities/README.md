# Exported Members

## Constants

* HTTP_METHOD (enum)
* JSON_HEADER = { 'Content-Type': 'application/json'
* isBrowser
* isClient
* MIME_TYPE (enum)

## String Utilities
* formatList(list: string[]): string
* formatPhoneNumber(string: string): string | undefined
* randomColor(): string
* isStringNot(string: unknown, not?: string): boolean
* toCapitalizedWords(string: string): string
* kebabCaseToWords(string: string): string
* wordStringToCamelCase(string: string): string
* isValidEmail(string: string): boolean
* isValidIpV4(v4Address: string): boolean
* isValidIpV6(v6Address: string): boolean
* isValidDualIp(ipAddress: string): boolean
* isValidIpAddress(string: string): boolean

## Array Utilities

* arrayHasDuplicate(array: unknown[]): boolean
* shuffleArray<Type>(array: Type[]): Type[]

## Device Utilities

* isMobile(): boolean

## HTTP Utilities

* swrFetcher = async <ResponseType>(...arguments_: [input: RequestInfo, init?: RequestInit]): Promise<ResponseType>
* isLocalhost(): boolean
* removeQueryParameters(): void
* successfullySettledPromises = async <Type>(promises: Array<Promise<Type>>): Promise<Type[]>

## JSON Utilities

* xmlToJson<JSONType>(xmlString: string): JSONType

## Object Utilities

immutableSet<ObjectType, ValueType>(object: ObjectType, key: keyof ObjectType, value: ValueType): ObjectType

## Regex Utilities

allDigitsInString(string: string): string | undefined
isValidHostname(string: string): boolean
isValidPhoneNumber(string: string): boolean
isValidUrl(string: string): boolean
isAlphaNumeric(string: string): boolean

## Time Utilities

* type IntervalCallback = (time: number | undefined) => void;
* type DateObjectArgumentTypes = Date | string | number;
* addDays = (date: DateObjectArgumentTypes, daysToAdd: number): Date
* ageFromBirthday = (birthDay: DateObjectArgumentTypes): number
* arrayOfDaysBetweenDays = ({ endDate, skip = 1, startDate, }: { endDate: DateObjectArgumentTypes, skip?: number, startDate: DateObjectArgumentTypes}): Date[]
* beforeMidnight = (date = new Date()): number
* convertTimeZone = (date: Date | string, tzString: string = new Intl.DateTimeFormat().resolvedOptions().timeZone): Date
* getNearestDate = (dateArray: Date[] | string[]): Date
* dayStartEnd = (date: DateObjectArgumentTypes, startOrEnd: 'start' | 'end'): Date
* htmlInputDateTimeInputFormat = (date: Date | number | string = new Date()): string
* humanReadableLocalDateTime = (dateTime: Date | string): string
* rssDateFormat = (date: Date | string | number): string
* toDateObject = (date: DateObjectArgumentTypes): Date
* animationInterval = (ms: number, signal: AbortSignal, callback: IntervalCallback): void

## Type Utilities

* isNullOrUndefined = <Type>(value?: Type): boolean

## URL Utilities

* getYoutubeId = ({ url, options, }: GetYoutubeIdProperties): string | undefined
* isUrlSecure = (url: string): boolean
* urlSecureVersion = (url: string): string
