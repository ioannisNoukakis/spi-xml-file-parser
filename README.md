# Service Program Information (SPI) XML parser

This TypeScript library provides utilities to parse a whole SPI file as well as parts of it.
Please refer to the [ETSI TS 102 818 V3.1.1 ](https://www.etsi.org/deliver/etsi_TS/102800_102899/102818/03.01.01_60/ts_102818v030101p.pdf)
specification for more information about SPI files.

## Installation

    npm i --save spi_file_parser

## Usage

    import {parse} from "spi_file_parser";
    
    const parsed = parse(xmlFile);

## Development setup instructions

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Installing

To install development dependencies type into a terminal (with this directory as working directory)

    npm install

You must also install TypeScript and TSLint:

    npm install -g typescript tslint

## Running the tests

    npm run test
    
## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Authors

* **Ioannis Noukakis** - *Initial work* - [ioannisNoukakis](https://github.com/ioannisNoukakis)

See also the list of [contributors](https://github.com/ioannisNoukakis/radiodns_react_native_demo/contributors)
who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
