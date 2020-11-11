

## Table 1: Entity Domain Constraints 


| Entity  | Attributes | Type | Domain | 
| ------------- | ------------- | ------------- | ------------- |
| Websites/Vender  | URL (PK) | String | A unique, valid website URL. |
|   | companyName | String | The name of the company. |
| Warehouses | wareHouseID (PK) | Int | Unique real number in range 0001-9999. |
| | URL (FK) | String | A unique, valid website URL |
| | Location | Int | Unique, 5 digit number zipcode. |
|Monitors| itemID (FK) |Int| Unique real number in range 0001-9999.|
| | screenSize | Int | Size of the phone diagonally in inches. |
| | resolution | String | In the format of “(number) x (number)”|
| | refreshRate | Int| Positive number in hz units.|
| | type | String | “oled” or “va” or “ips” |
| | audio | Boolean | If speakers are included or not. |
| | HdmiPorts | Int | Positive number of HDMI ports, including 0.|
| | DisplayPorts | Int | Positive number of ports, including 0. |
| | DviPorts | Int | Positive number of ports, including 0 |
| | Color | String | Color of bezels, I.E: Red, blue, orange, green, etc.|
| Keyboards | itemID (FK) | Int | Unique real number in range 0001-9999. |
| | Color | String | Color of keyboard, I.E: Red, blue, orange, green, etc. |
|| Backlight_Color | String | Color of backlights, I.E: Red, blue, orange, green, etc. |
| | Numpad | Boolean | If a numpad is included or not.|
| | Wireless | Boolean | If the keyboard is wireless or not. |
|Phones | itemID (FK) | Int | Unique real number in range 0001-9999. |
| | resolution | String | In the format of “(number) x (number)”|
| | screenType |  String | “oled” or “lcd”|
| | ipRating | Int | A 2 digit long positive number. |
| | storage | Int | Any positive number over 0 in GB. |
| | RAM | Int | Any positive number over 0 in GB.|
| | CPU | String | The name of the CPU chip.|
| | OS | String | Operating systems name + version number.|
| | Carrier | String | Name of phone carrier.|
| | 5G |Boolean| Yes if the phone has 5G connection, no otherwise.|
| | Battery | Int | Positive number in mAH units. |
| | Size | Int | Size of the phone diagonally in inches. |
| Motherboards | itemID (FK) | Int | Unique real number in range 0001-9999.|
| |Chipset|  String|  Unique alphanumeric identifier.|
| | numUSBports | Int| Any positive number over 0. |
| | Network | Bool | Yes if wifi+Bluetooth is included, no otherwise.|
| | formFactor | String | “ATX” or “Micro ATX” or “Mini ATX.” |
| Storage (HDDs) | itemID (FK) | Int | Unique real number in range 0001-9999.|
| | capacity | Int | Any positive number over 0 in GB. 
| | storageType | String | HDD or SSD. |
| | storageStandard | String | SATA or NVME.|
| | formFactor | String | “m2” or “3.5” or “2.5”|
| | wattage | Int | Any positive number over 0.|
| Memory | itemID (FK) | Int | Unique real number in range 0001-9999. |
| | memoryCapacity | Int | Any positive number over 0 in GB |
| CPUs | itemID (FK) | Int | Unique real number in range 0001-9999.|
| | Chipset | String | Unique alphanumeric identifier. |
| | integratedGraphics | Boolean | Yes for if there are IG, no if not.|
| | wattage | Int | Any positive number over 0. |

## Table 2: Relationship Domain Constraints
| Relationship  | Functionality | Attribute | Type |  Domain | 
| ------------- | ------------- | ------------- | ------------- |  ------------- | 
|Contains | One-To-Many | itemID (FK) | Int | Unique real number in range 0001-9999.|
| | | warehouseID (FK) | Int | Unique int in range 0001-9999.|
| | | count | Int | Stock amount number that is 0 or greater.|
| | | currentPrice | Double | Number to represent price in dollars. |
| | | historicalLow | Double | Number to represent price in dollars of the lowest price a specific item has ever been. |
| | | historicalHigh | Double | Number to represent price in dollars of the highest price a specific item has ever been.|
| | | saleStatus |  String | “Sale” or “Clearance” or “None”.|
| | | shippingPrice | Double | Number to represent price in dollars of shipping costs.|
| Identifies Products | One-To-Many | itemID (FK) | Int | Unique real number in range 0001-9999.|
| | | itemName | String | The name of the product. | 
| | | category | String | The category of the product, I.E. CPU, monitor, RAM…|
| | | manufacturer | String | The name of the brand. |
| | | series | String | The name of the product line. (Null if not applicable.)|
| | | releaseDate | String | The day the product was first released.|
| | | modelNumber | String | An alphanumeric string to identity a model. |
| Identifies Vendor | One-To-Many | wareHouseID (PK) | Int | Unique int in range 0001-9999 |
| | | URL (FK) | String | Unique URL for each company. | 
| | | Location | String | Where the company is located. | 
| | | company | String | The name of the comapny. | 

