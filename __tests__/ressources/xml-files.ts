// tslint:disable
export const SINGLE_SERVICE_SPI_FILE = `<?xml version="1.0" encoding="UTF-8"?>
<serviceInformation xmlns="http://www.worlddab.org/schemas/spi/31" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xsi:schemaLocation="http://www.worlddab.org/schemas/spi/31 spi_31.xsd"
                    creationTime="2019-02-04T13:20:04" originator="EBU.io RadioDNS Services v3"
                    xml:lang="de">
    <services>
        <serviceProvider>
            <shortName
                            xml:lang="de">Radio 24</shortName>
            <mediumName
                            xml:lang="de">Radio 24 AG</mediumName>
            <longName
                            xml:lang="de">Radio 24 AG</longName>
            <shortDescription
                            xml:lang="de">Radio 24 AG</shortDescription>
            <link url="http://radio24.ch/" mimeValue="text/html"
                          description="Radio 24 Webpage"
                          xml:lang="de"/>
            <link uri="postal:Radio 24 AG/Limmatstrasse 264/Zürich/8031/Switzerland"/>
            <link uri="tel:+41 44 448 24 24"/>
            <mediaDescription>
                <multimedia type="logo_colour_square" width="32" height="32"
                                url="http://static.chrd24.radio.ebu.io/32x32/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_colour_rectangle" width="112" height="32"
                                url="http://static.chrd24.radio.ebu.io/112x32/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_unrestricted" width="128" height="128"
                                url="http://static.chrd24.radio.ebu.io/128x128/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_unrestricted" width="320" height="240"
                                url="http://static.chrd24.radio.ebu.io/320x240/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_unrestricted" width="600" height="600"
                                url="http://static.chrd24.radio.ebu.io/600x600/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <geolocation>
                <country>ch</country>
            </geolocation>
        </serviceProvider>
        <service>
            <shortName>Radio 24</shortName>
            <mediumName>Radio 24</mediumName>
            <longName>Radio 24 - #dasischzüri</longName>
            <shortDescription xml:lang="fr">Radio 24 - #dasischzüri</shortDescription>
            <link url="http://radio24.ch/" mimeValue="text/html"
                          xml:lang="de"/>
            <link uri="postal:Radio 24 AG/Limmatstrasse 264/Zürich/8031/Switzerland"/>
            <radiodns fqdn="radio24.chrd24.radio.ebu.io"
                          serviceIdentifier="ebu203chrd24"/>
            <bearer
                            id="fm:4e1.4f15.09210"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09210"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09940"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09940"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09610"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09610"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09230"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09230"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.08760"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.08760"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09690"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09690"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.10280"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.10280"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09580"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09580"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09340"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09340"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="http://icecast.radio24.ch/radio24"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/mpeg"
                            
                            
                                bitrate="128"
                            />
            <bearer
                            id="fm:4e1.4f15.09810"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09810"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:4e1.4f15.09000"
                            
                                cost="50"
                            
                            
                            
                            />
            <bearer
                            id="fm:ch.4f15.09000"
                            
                                cost="50"
                            
                            
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.chrd24.radio.ebu.io/32x32/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.chrd24.radio.ebu.io/112x32/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.chrd24.radio.ebu.io/128x128/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.chrd24.radio.ebu.io/320x240/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.chrd24.radio.ebu.io/600x600/fc8e6e2d-e022-48f9-9c4d-4374c4b5bac6.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.4.1">Pop</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.4">Pop-rock</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1">News</genre>
        </service>
    </services>
</serviceInformation>`;

export const MULTIPLE_SERVICE_RAW_SPI_FILE = `<?xml version="1.0" encoding="UTF-8"?>
<serviceInformation xmlns="http://www.worlddab.org/schemas/spi/31" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xsi:schemaLocation="http://www.worlddab.org/schemas/spi/31 spi_31.xsd"
                    creationTime="2019-02-04T13:17:41" originator="EBU.io RadioDNS Services v3"
                    xml:lang="nb-NO">
    <services>
        <serviceProvider>
            <shortName
                            xml:lang="nb-NO">NRK</shortName>
            <mediumName
                            xml:lang="nb-NO">NRK</mediumName>
            <longName
                            xml:lang="nb-NO">NRK</longName>
            <shortDescription
                            xml:lang="nb-NO">Norsk Riks kringkasting</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          description="NRK Webpage"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:+47 2304 7000"/>
            <mediaDescription>
                <multimedia type="logo_colour_square" width="32" height="32"
                                url="http://static.nonrk.radio.ebu.io/32x32/d87340e9-2e80-431d-a315-2a95eadcd384.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_colour_rectangle" width="112" height="32"
                                url="http://static.nonrk.radio.ebu.io/112x32/d87340e9-2e80-431d-a315-2a95eadcd384.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_unrestricted" width="128" height="128"
                                url="http://static.nonrk.radio.ebu.io/128x128/d87340e9-2e80-431d-a315-2a95eadcd384.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_unrestricted" width="320" height="240"
                                url="http://static.nonrk.radio.ebu.io/320x240/d87340e9-2e80-431d-a315-2a95eadcd384.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia type="logo_unrestricted" width="600" height="600"
                                url="http://static.nonrk.radio.ebu.io/600x600/d87340e9-2e80-431d-a315-2a95eadcd384.png"/>
            </mediaDescription>
            <geolocation>
                <country>no</country>
            </geolocation>
        </serviceProvider>
        <service>
            <shortName>NRKSpor</shortName>
            <mediumName>NRK Sport</mediumName>
            <longName>NRK Sport</longName>
            <shortDescription xml:lang="fr">NRK Sport</shortDescription>
            <link url="http://www.nrk.no/sport" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrksport.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu53nonrk"/>
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_sport_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <bearer
                            id="dab:fe2.f201.f30a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8f23eb6-0979-4d8f-af05-d0e2547c2ff5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8f23eb6-0979-4d8f-af05-d0e2547c2ff5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8f23eb6-0979-4d8f-af05-d0e2547c2ff5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8f23eb6-0979-4d8f-af05-d0e2547c2ff5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8f23eb6-0979-4d8f-af05-d0e2547c2ff5.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.2">Sports </genre>
        </service>
        <service>
            <shortName>NRK P1</shortName>
            <mediumName>NRK P1</mediumName>
            <longName>NRK P1</longName>
            <shortDescription xml:lang="fr">NRK P1</shortDescription>
            <link url="www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/None/0340 Oslo/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu146nonrk"/>
            <bearer
                            id="dab:fe2.f701.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f201.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/5847153a-7167-4da5-9bfe-21c0af7ebea6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/5847153a-7167-4da5-9bfe-21c0af7ebea6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/5847153a-7167-4da5-9bfe-21c0af7ebea6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/5847153a-7167-4da5-9bfe-21c0af7ebea6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/5847153a-7167-4da5-9bfe-21c0af7ebea6.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRKØstl</shortName>
            <mediumName>NRK P1 Østland</mediumName>
            <longName>NRK P1 Østlandssendingen</longName>
            <shortDescription xml:lang="fr">NRK P1 Østlandssendingen</shortDescription>
            <link url="www.nrk.no/oa" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1stlandssendingen.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu147nonrk"/>
            <bearer
                            id="dab:fe2.f701.f601.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/f96e446e-523e-4188-8134-0d4d6456e2db.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/f96e446e-523e-4188-8134-0d4d6456e2db.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/f96e446e-523e-4188-8134-0d4d6456e2db.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/f96e446e-523e-4188-8134-0d4d6456e2db.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/f96e446e-523e-4188-8134-0d4d6456e2db.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
        </service>
        <service>
            <shortName>NRKØstf</shortName>
            <mediumName>NRK P1 Østfold</mediumName>
            <longName>NRK P1 Østfold</longName>
            <shortDescription xml:lang="fr">NRK P1 Østfold</shortDescription>
            <link url="www.nrk.no/ostfold" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1stfold.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu148nonrk"/>
            <bearer
                            id="dab:fe2.f701.f401.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_ostfold_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/bb0d3526-1d6d-44b1-b26e-6782925f1172.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/bb0d3526-1d6d-44b1-b26e-6782925f1172.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/bb0d3526-1d6d-44b1-b26e-6782925f1172.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/bb0d3526-1d6d-44b1-b26e-6782925f1172.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/bb0d3526-1d6d-44b1-b26e-6782925f1172.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK P2</shortName>
            <mediumName>NRK P2</mediumName>
            <longName>NRK P2</longName>
            <shortDescription xml:lang="fr">NRK P2</shortDescription>
            <link url="www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp2.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu149nonrk"/>
            <bearer
                            id="dab:fe2.f701.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f202.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p2_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/382853cd-ea06-4c71-b40d-933411baba0a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/382853cd-ea06-4c71-b40d-933411baba0a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/382853cd-ea06-4c71-b40d-933411baba0a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/382853cd-ea06-4c71-b40d-933411baba0a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/382853cd-ea06-4c71-b40d-933411baba0a.png"/>
            </mediaDescription>
        </service>
        <service>
            <shortName>NRK P3</shortName>
            <mediumName>NRK P3</mediumName>
            <longName>NRK P3</longName>
            <shortDescription xml:lang="fr">NRK P3</shortDescription>
            <link url="www.p3.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Direkte til P3" uri="mailto:p3@nrk.no"/>
            <radiodns fqdn="nrkp3.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu150nonrk"/>
            <bearer
                            id="dab:fe2.f701.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f203.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p3_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/3e0ebdd4-4f52-497e-82ec-a0e5d5eb0489.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/3e0ebdd4-4f52-497e-82ec-a0e5d5eb0489.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/3e0ebdd4-4f52-497e-82ec-a0e5d5eb0489.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/3e0ebdd4-4f52-497e-82ec-a0e5d5eb0489.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/3e0ebdd4-4f52-497e-82ec-a0e5d5eb0489.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.4">Pop-rock </genre>
        </service>
        <service>
            <shortName>NRKBusk</shortName>
            <mediumName>NRK P1 Buskerud</mediumName>
            <longName>NRK P1 Buskerud</longName>
            <shortDescription xml:lang="fr">NRK P1 Buskerud</shortDescription>
            <link url="http://www.nrk.no/bu" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1buskerud.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu151nonrk"/>
            <bearer
                            id="dab:fe2.f901.f901.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_buskerud_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/0275274a-ff69-4e98-ab60-03173c175bb5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/0275274a-ff69-4e98-ab60-03173c175bb5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/0275274a-ff69-4e98-ab60-03173c175bb5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/0275274a-ff69-4e98-ab60-03173c175bb5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/0275274a-ff69-4e98-ab60-03173c175bb5.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK P1+</shortName>
            <mediumName>NRK P1+</mediumName>
            <longName>NRK P1+</longName>
            <shortDescription xml:lang="fr">NRK P1+</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu152nonrk"/>
            <bearer
                            id="dab:fe2.f701.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f209.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/cd071e2b-576c-42eb-a6aa-256378b91558.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/cd071e2b-576c-42eb-a6aa-256378b91558.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/cd071e2b-576c-42eb-a6aa-256378b91558.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/cd071e2b-576c-42eb-a6aa-256378b91558.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/cd071e2b-576c-42eb-a6aa-256378b91558.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Østl</shortName>
            <mediumName>NRK P1+Østlands</mediumName>
            <longName>NRK P1+ Østlandsendingen</longName>
            <shortDescription xml:lang="fr">NRK P1+ Østlandsendingen</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1stlandssendingen.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu153nonrk"/>
            <bearer
                            id="dab:fe2.f701.f611.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/55afe016-a373-4571-8390-ca4ef8cc4de5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/55afe016-a373-4571-8390-ca4ef8cc4de5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/55afe016-a373-4571-8390-ca4ef8cc4de5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/55afe016-a373-4571-8390-ca4ef8cc4de5.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/55afe016-a373-4571-8390-ca4ef8cc4de5.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Østf</shortName>
            <mediumName>NRK P1+Østfold</mediumName>
            <longName>NRK P1+ Østfold</longName>
            <shortDescription xml:lang="fr">NRK P1+ Østfold</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1stfold.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu154nonrk"/>
            <bearer
                            id="dab:fe2.f701.f411.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/f05ef71d-1b3d-4657-8ca0-2d3e8d2ffa2d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/f05ef71d-1b3d-4657-8ca0-2d3e8d2ffa2d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/f05ef71d-1b3d-4657-8ca0-2d3e8d2ffa2d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/f05ef71d-1b3d-4657-8ca0-2d3e8d2ffa2d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/f05ef71d-1b3d-4657-8ca0-2d3e8d2ffa2d.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK mP3</shortName>
            <mediumName>NRK mP3</mediumName>
            <longName>NRK mP3</longName>
            <shortDescription xml:lang="fr">NRK mP3</shortDescription>
            <link url="http://www.nrk.no/mp3/" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkmp3.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu155nonrk"/>
            <bearer
                            id="dab:fe2.f701.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f208.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_mp3_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/5e09ea00-ecc4-44aa-b4db-64958f008a5c.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/5e09ea00-ecc4-44aa-b4db-64958f008a5c.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/5e09ea00-ecc4-44aa-b4db-64958f008a5c.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/5e09ea00-ecc4-44aa-b4db-64958f008a5c.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/5e09ea00-ecc4-44aa-b4db-64958f008a5c.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.4.1">Pop </genre>
        </service>
        <service>
            <shortName>NRK SUPR</shortName>
            <mediumName>NRK SUPER</mediumName>
            <longName>NRK SUPER</longName>
            <shortDescription xml:lang="fr">NRK SUPER</shortDescription>
            <link url="http://www.nrksuper.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Info" uri="mailto:info@nrk.no"/>
            <radiodns fqdn="nrksuper.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu157nonrk"/>
            <bearer
                            id="dab:fe2.f701.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f20a.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_super_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b5f39c34-7e99-4fdc-b6c9-96b4f52a7136.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b5f39c34-7e99-4fdc-b6c9-96b4f52a7136.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b5f39c34-7e99-4fdc-b6c9-96b4f52a7136.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b5f39c34-7e99-4fdc-b6c9-96b4f52a7136.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b5f39c34-7e99-4fdc-b6c9-96b4f52a7136.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:4.2.1">Children </genre>
        </service>
        <service>
            <shortName>NRK NYHT</shortName>
            <mediumName>NRK NYHETER</mediumName>
            <longName>NRK ALLTID NYHETER</longName>
            <shortDescription xml:lang="fr">NRK NYHETER</shortDescription>
            <link url="http://www.nrk.no/nyheter" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:03030"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrknyheter.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu158nonrk"/>
            <bearer
                            id="dab:fe2.f701.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f206.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_alltid_nyheter_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/102450e6-1c45-48a9-afb2-a25db8a498d3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/102450e6-1c45-48a9-afb2-a25db8a498d3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/102450e6-1c45-48a9-afb2-a25db8a498d3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/102450e6-1c45-48a9-afb2-a25db8a498d3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/102450e6-1c45-48a9-afb2-a25db8a498d3.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1">News </genre>
        </service>
        <service>
            <shortName>NRK SÁMI</shortName>
            <mediumName>NRK SÁPMI</mediumName>
            <longName>NRK SÁPMI</longName>
            <shortDescription xml:lang="fr">NRK SÁPMI</shortDescription>
            <link url="http://www.nrk.no/sapmi" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:+47 905 91 111."/>
            <link description="Nyhetstips" uri="mailto:samivaktsjef@nrk.no"/>
            <radiodns fqdn="nrksapmi.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu159nonrk"/>
            <bearer
                            id="dab:fe2.f701.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f205.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_sami_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b91c8cbe-0ae1-4886-be78-f45361fb4e7b.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b91c8cbe-0ae1-4886-be78-f45361fb4e7b.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b91c8cbe-0ae1-4886-be78-f45361fb4e7b.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b91c8cbe-0ae1-4886-be78-f45361fb4e7b.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b91c8cbe-0ae1-4886-be78-f45361fb4e7b.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.9">World/Traditional/Folk </genre>
        </service>
        <service>
            <shortName>NRK VærS</shortName>
            <mediumName>NRK Vær SØR</mediumName>
            <longName>NRK Vær SØR</longName>
            <shortDescription xml:lang="fr">NRK Vær SØR</shortDescription>
            <link url="http://www.yr.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkvrsr.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu160nonrk"/>
            <bearer
                            id="dab:fe2.f701.f301.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f303.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f302.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.13">Weather forecasts </genre>
        </service>
        <service>
            <shortName>NRKVstf</shortName>
            <mediumName>NRK P1 Vestfold</mediumName>
            <longName>NRK P1 Vestfold</longName>
            <shortDescription xml:lang="fr">NRK P1 Vestfold</shortDescription>
            <link url="http://www.nrk.no/vestfold" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1vestfold.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu163nonrk"/>
            <bearer
                            id="dab:fe2.f901.fa01.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_vestfold_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/24086f10-71fa-422f-954d-3d3b5bc4f8c3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/24086f10-71fa-422f-954d-3d3b5bc4f8c3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/24086f10-71fa-422f-954d-3d3b5bc4f8c3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/24086f10-71fa-422f-954d-3d3b5bc4f8c3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/24086f10-71fa-422f-954d-3d3b5bc4f8c3.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRKTelm</shortName>
            <mediumName>NRK P1 Telemark</mediumName>
            <longName>NRK P1 Telemark</longName>
            <shortDescription xml:lang="fr">NRK P1 Telemark</shortDescription>
            <link url="http://www.nrk.no/telemark" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1telemark.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu164nonrk"/>
            <bearer
                            id="dab:fe2.f901.fb01.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_telemark_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/a6e7b027-f0a2-432f-bbe0-2aaf5d37141e.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/a6e7b027-f0a2-432f-bbe0-2aaf5d37141e.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/a6e7b027-f0a2-432f-bbe0-2aaf5d37141e.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/a6e7b027-f0a2-432f-bbe0-2aaf5d37141e.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/a6e7b027-f0a2-432f-bbe0-2aaf5d37141e.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK+Telm</shortName>
            <mediumName>NRK P1+Telemark</mediumName>
            <longName>NRK P1+ Telemark</longName>
            <shortDescription xml:lang="fr">NRK P1+ Telemark</shortDescription>
            <link url="http://www.nrk.no/telemark" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1telemark.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu165nonrk"/>
            <bearer
                            id="dab:fe2.f901.fb11.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/2c48d360-ae2d-4ed5-a574-4532501edbe7.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/2c48d360-ae2d-4ed5-a574-4532501edbe7.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/2c48d360-ae2d-4ed5-a574-4532501edbe7.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/2c48d360-ae2d-4ed5-a574-4532501edbe7.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/2c48d360-ae2d-4ed5-a574-4532501edbe7.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Vstf</shortName>
            <mediumName>NRK P1+Vestfold</mediumName>
            <longName>NRK P1+ Vestfold</longName>
            <shortDescription xml:lang="fr">NRK P1+ Vestfold</shortDescription>
            <link url="http://www.nrk.no/vestfold" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <radiodns fqdn="nrkp1vestfold.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu166nonrk"/>
            <bearer
                            id="dab:fe2.f901.fa11.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/c2497cf5-75fe-4615-baa2-d91af9f85444.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/c2497cf5-75fe-4615-baa2-d91af9f85444.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/c2497cf5-75fe-4615-baa2-d91af9f85444.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/c2497cf5-75fe-4615-baa2-d91af9f85444.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/c2497cf5-75fe-4615-baa2-d91af9f85444.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Busk</shortName>
            <mediumName>NRK P1+Buskerud</mediumName>
            <longName>NRK P1+ Buskerud</longName>
            <shortDescription xml:lang="fr">NRK P1+ Buskerud</shortDescription>
            <link url="http://www.nrk.no/buskerud" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1buskerud.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu167nonrk"/>
            <bearer
                            id="dab:fe2.f901.f911.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/0dc2b264-4060-499b-a360-5ba38b120e22.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/0dc2b264-4060-499b-a360-5ba38b120e22.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/0dc2b264-4060-499b-a360-5ba38b120e22.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/0dc2b264-4060-499b-a360-5ba38b120e22.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/0dc2b264-4060-499b-a360-5ba38b120e22.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK P13</shortName>
            <mediumName>NRK P13</mediumName>
            <longName>NRK P13</longName>
            <shortDescription xml:lang="fr">NRK P13</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Send melding med kodeord P13 til 1987" uri="sms:1987?body=P13+"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp13.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu168nonrk"/>
            <bearer
                            id="dab:fe2.f201.f20d.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p13_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/d9de4ae9-b71f-42db-a74b-5b06676f3db8.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/d9de4ae9-b71f-42db-a74b-5b06676f3db8.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/d9de4ae9-b71f-42db-a74b-5b06676f3db8.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/d9de4ae9-b71f-42db-a74b-5b06676f3db8.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/d9de4ae9-b71f-42db-a74b-5b06676f3db8.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.4">Pop-rock </genre>
        </service>
        <service>
            <shortName>NRK JAZZ</shortName>
            <mediumName>NRK JAZZ</mediumName>
            <longName>NRK JAZZ</longName>
            <shortDescription xml:lang="fr">NRK JAZZ</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkjazz.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu169nonrk"/>
            <bearer
                            id="dab:fe2.f701.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_jazz_aac_h"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f20b.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/a4274554-c356-4500-b49e-c8d1b88e98cb.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/a4274554-c356-4500-b49e-c8d1b88e98cb.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/a4274554-c356-4500-b49e-c8d1b88e98cb.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/a4274554-c356-4500-b49e-c8d1b88e98cb.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/a4274554-c356-4500-b49e-c8d1b88e98cb.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.2">Jazz </genre>
        </service>
        <service>
            <shortName>NRK Klas</shortName>
            <mediumName>NRK Klassisk</mediumName>
            <longName>NRK Klassisk</longName>
            <shortDescription xml:lang="fr">NRK Klassisk</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23 04 70 00"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkklassisk.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu170nonrk"/>
            <bearer
                            id="dab:fe2.f701.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_klassisk_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <bearer
                            id="dab:fe2.f901.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f801.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f401.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f501.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f601.f204.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/2b1382cb-8e67-4ec1-ab27-01a1541da8e1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/2b1382cb-8e67-4ec1-ab27-01a1541da8e1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/2b1382cb-8e67-4ec1-ab27-01a1541da8e1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/2b1382cb-8e67-4ec1-ab27-01a1541da8e1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/2b1382cb-8e67-4ec1-ab27-01a1541da8e1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.1.2">Serious Classical </genre>
        </service>
        <service>
            <shortName>NRKRoga</shortName>
            <mediumName>NRK P1 Rogaland</mediumName>
            <longName>NRK P1 Rogaland</longName>
            <shortDescription xml:lang="fr">NRK P1 Rogaland</shortDescription>
            <link url="http://www.nrk.no/rogaland/" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1rogaland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu171nonrk"/>
            <bearer
                            id="dab:fe2.f801.fe01.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_rogaland_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/01a28505-6347-40ee-b76e-4b61790c00ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/01a28505-6347-40ee-b76e-4b61790c00ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/01a28505-6347-40ee-b76e-4b61790c00ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/01a28505-6347-40ee-b76e-4b61790c00ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/01a28505-6347-40ee-b76e-4b61790c00ec.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRKSørl</shortName>
            <mediumName>NRK P1 Sørlandet</mediumName>
            <longName>NRK P1 Sørlandet</longName>
            <shortDescription xml:lang="fr">NRK P1 Sørlandet</shortDescription>
            <link url="http://www.nrk.no/sorlandet" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1srlandet.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu172nonrk"/>
            <bearer
                            id="dab:fe2.f801.fc01.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_sorlandet_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/1c613bbc-c895-48f6-ae42-c29a7c04ac62.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/1c613bbc-c895-48f6-ae42-c29a7c04ac62.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/1c613bbc-c895-48f6-ae42-c29a7c04ac62.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/1c613bbc-c895-48f6-ae42-c29a7c04ac62.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/1c613bbc-c895-48f6-ae42-c29a7c04ac62.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK+Sørl</shortName>
            <mediumName>NRK P1+Sørlandet</mediumName>
            <longName>NRK P1+ Sørlandet</longName>
            <shortDescription xml:lang="fr">NRK P1+ Sørlandet</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1srlandet.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu173nonrk"/>
            <bearer
                            id="dab:fe2.f801.fc11.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/065131f9-6407-4a72-842e-7844ad4ef1dd.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/065131f9-6407-4a72-842e-7844ad4ef1dd.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/065131f9-6407-4a72-842e-7844ad4ef1dd.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/065131f9-6407-4a72-842e-7844ad4ef1dd.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/065131f9-6407-4a72-842e-7844ad4ef1dd.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Roga</shortName>
            <mediumName>NRK P1+Rogaland</mediumName>
            <longName>NRK P1+ Rogaland</longName>
            <shortDescription xml:lang="fr">NRK P1+ Rogaland</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1rogaland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu174nonrk"/>
            <bearer
                            id="dab:fe2.f801.fe11.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/20adf36d-9fee-4c5a-95e5-5ad507c8492d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/20adf36d-9fee-4c5a-95e5-5ad507c8492d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/20adf36d-9fee-4c5a-95e5-5ad507c8492d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/20adf36d-9fee-4c5a-95e5-5ad507c8492d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/20adf36d-9fee-4c5a-95e5-5ad507c8492d.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Hord</shortName>
            <mediumName>NRK P1+Hordaland</mediumName>
            <longName>NRK P1+ Hordaland</longName>
            <shortDescription xml:lang="fr">NRK P1+ Hordaland</shortDescription>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1hordaland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu176nonrk"/>
            <bearer
                            id="dab:fe2.f401.ff11.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/f1381a1d-e41f-4f7d-b3dd-c07a40544027.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/f1381a1d-e41f-4f7d-b3dd-c07a40544027.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/f1381a1d-e41f-4f7d-b3dd-c07a40544027.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/f1381a1d-e41f-4f7d-b3dd-c07a40544027.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/f1381a1d-e41f-4f7d-b3dd-c07a40544027.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRKS&amp;Fj</shortName>
            <mediumName>NRK P1 Sogn &amp; Fj</mediumName>
            <longName>NRK P1 Sogn og Fjordane</longName>
            <shortDescription xml:lang="fr">NRK P1 Sogn og Fjordane</shortDescription>
            <link url="http://www.nrk.no/sf" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:57 72 42 42"/>
            <link description="Nyhetstips" uri="sms:1987?body=Send+SMS%2F+MMS+til+1987+med+kodeord+SF"/>
            <link description="Nyhetstips" uri="mailto:sf@nrk.no"/>
            <radiodns fqdn="nrkp1sognogfjordane.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu177nonrk"/>
            <bearer
                            id="dab:fe2.f401.f401.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_sogn_og_fjordane_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/75260303-6507-45e6-87c7-5ff066bedb70.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/75260303-6507-45e6-87c7-5ff066bedb70.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/75260303-6507-45e6-87c7-5ff066bedb70.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/75260303-6507-45e6-87c7-5ff066bedb70.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/75260303-6507-45e6-87c7-5ff066bedb70.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK+So&amp;F</shortName>
            <mediumName>NRK+Sogn &amp; Fj</mediumName>
            <longName>NRK P1+ Sogn og Fjordane</longName>
            <shortDescription xml:lang="fr">NRK P1+ Sogn og Fjordane</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1sognogfjordane.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu178nonrk"/>
            <bearer
                            id="dab:fe2.f401.f411.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/c3d949b0-0132-443d-8b20-9c0d373d22a2.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/c3d949b0-0132-443d-8b20-9c0d373d22a2.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/c3d949b0-0132-443d-8b20-9c0d373d22a2.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/c3d949b0-0132-443d-8b20-9c0d373d22a2.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/c3d949b0-0132-443d-8b20-9c0d373d22a2.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRKH&amp;Op</shortName>
            <mediumName>NRK P1 Hed &amp; Opp</mediumName>
            <longName>NRK P1 Hedmark og Oppland</longName>
            <shortDescription xml:lang="fr">NRK P1 Hedmark og Oppland</shortDescription>
            <link url="http://www.nrk.no/ho/" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:61 28 72 00"/>
            <link description="Nyhetstips" uri="mailto:ho@nrk.no"/>
            <radiodns fqdn="nrkp1hedmarkogoppland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu179nonrk"/>
            <bearer
                            id="dab:fe2.f501.f801.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_hedmark_og_oppland_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/cdfd796b-1170-403e-aea2-d7084134f7e6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/cdfd796b-1170-403e-aea2-d7084134f7e6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/cdfd796b-1170-403e-aea2-d7084134f7e6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/cdfd796b-1170-403e-aea2-d7084134f7e6.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/cdfd796b-1170-403e-aea2-d7084134f7e6.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK+H&amp;Op</shortName>
            <mediumName>NRK P1+Hed &amp; Opp</mediumName>
            <longName>NRK P1+ Hedmark og Oppland</longName>
            <shortDescription xml:lang="fr">NRK P1+ Hedmark og Oppland</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1hedmarkogoppland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu180nonrk"/>
            <bearer
                            id="dab:fe2.f501.f811.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/71ab6633-623b-4e70-8bec-fb3b41134499.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/71ab6633-623b-4e70-8bec-fb3b41134499.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/71ab6633-623b-4e70-8bec-fb3b41134499.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/71ab6633-623b-4e70-8bec-fb3b41134499.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/71ab6633-623b-4e70-8bec-fb3b41134499.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRKM&amp;Ro</shortName>
            <mediumName>NRK P1 Møre &amp; Ro</mediumName>
            <longName>NRK P1 Møre og Romsdal</longName>
            <shortDescription xml:lang="fr">NRK P1 Møre og Romsdal</shortDescription>
            <link url="http://www.nrk.no/mr" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:03030"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1mreogromsdal.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu181nonrk"/>
            <bearer
                            id="dab:fe2.f301.f501.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_more_og_romsdal_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/7a3d0dd2-5928-4063-a384-8389af418943.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/7a3d0dd2-5928-4063-a384-8389af418943.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/7a3d0dd2-5928-4063-a384-8389af418943.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/7a3d0dd2-5928-4063-a384-8389af418943.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/7a3d0dd2-5928-4063-a384-8389af418943.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRKTrl</shortName>
            <mediumName>NRK P1 Trøndelag</mediumName>
            <longName>NRK P1 Trøndelag</longName>
            <shortDescription xml:lang="fr">NRK P1 Trøndelag</shortDescription>
            <link url="http://www.nrk.no/trondelag" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1trndelag.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu182nonrk"/>
            <bearer
                            id="dab:fe2.f301.f502.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_trondelag_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/44c1aaef-5590-4308-8c55-c2110574c581.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/44c1aaef-5590-4308-8c55-c2110574c581.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/44c1aaef-5590-4308-8c55-c2110574c581.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/44c1aaef-5590-4308-8c55-c2110574c581.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/44c1aaef-5590-4308-8c55-c2110574c581.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK+M&amp;Ro</shortName>
            <mediumName>NRK P1+Møre&amp;Ro</mediumName>
            <longName>NRK P1+ Møre og Romsdal</longName>
            <shortDescription xml:lang="fr">NRK P1+ Møre og Romsdal</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1mreogromsdal.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu183nonrk"/>
            <bearer
                            id="dab:fe2.f301.f511.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/mpeg"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/84a3a1dd-b431-47f8-8f96-e625fd9b83ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/84a3a1dd-b431-47f8-8f96-e625fd9b83ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/84a3a1dd-b431-47f8-8f96-e625fd9b83ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/84a3a1dd-b431-47f8-8f96-e625fd9b83ec.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/84a3a1dd-b431-47f8-8f96-e625fd9b83ec.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Trl</shortName>
            <mediumName>NRK P1+Trøndelag</mediumName>
            <longName>NRK P1+ Trøndelag</longName>
            <shortDescription xml:lang="fr">NRK P1+ Trøndelag</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:03030"/>
            <link description="" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1trndelag.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu184nonrk"/>
            <bearer
                            id="dab:fe2.f301.f512.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/ec981a9c-9849-4513-9961-7db377192e40.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/ec981a9c-9849-4513-9961-7db377192e40.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/ec981a9c-9849-4513-9961-7db377192e40.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/ec981a9c-9849-4513-9961-7db377192e40.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/ec981a9c-9849-4513-9961-7db377192e40.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRKNord</shortName>
            <mediumName>NRK P1 Nordland</mediumName>
            <longName>NRK P1 Nordland</longName>
            <shortDescription xml:lang="fr">NRK P1 Nordland</shortDescription>
            <link url="http://www.nrk.no/nordland" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:75 50 57 00"/>
            <link description="Nyhetstips" uri="mailto:nordland@nrk.no"/>
            <radiodns fqdn="nrkp1nordland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu185nonrk"/>
            <bearer
                            id="dab:fe2.f601.f701.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_nordland_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/94e2e247-1922-4528-9ef6-79fcf600a02d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/94e2e247-1922-4528-9ef6-79fcf600a02d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/94e2e247-1922-4528-9ef6-79fcf600a02d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/94e2e247-1922-4528-9ef6-79fcf600a02d.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/94e2e247-1922-4528-9ef6-79fcf600a02d.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRKTroms</shortName>
            <mediumName>NRK P1 Troms</mediumName>
            <longName>NRK P1 Troms</longName>
            <shortDescription xml:lang="fr">NRK P1 Troms</shortDescription>
            <link url="http://www.nrk.no/troms" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1troms.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu186nonrk"/>
            <bearer
                            id="dab:fe2.f601.f702.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_troms_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/cfec40a6-b48c-4f0c-8308-8ec8627b50b9.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/cfec40a6-b48c-4f0c-8308-8ec8627b50b9.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/cfec40a6-b48c-4f0c-8308-8ec8627b50b9.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/cfec40a6-b48c-4f0c-8308-8ec8627b50b9.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/cfec40a6-b48c-4f0c-8308-8ec8627b50b9.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRKFinn</shortName>
            <mediumName>NRK P1 Finnmark</mediumName>
            <longName>NRK P1 Finnmark</longName>
            <shortDescription xml:lang="fr">NRK P1 Finnmark</shortDescription>
            <link url="http://www.nrk.no/finnmark" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1finnmark.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu187nonrk"/>
            <bearer
                            id="dab:fe2.f601.f703.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_finnmark_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/99792dec-f0a0-4502-81ce-920395938157.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/99792dec-f0a0-4502-81ce-920395938157.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/99792dec-f0a0-4502-81ce-920395938157.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/99792dec-f0a0-4502-81ce-920395938157.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/99792dec-f0a0-4502-81ce-920395938157.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK+Finn</shortName>
            <mediumName>NRK P1+Finnmark</mediumName>
            <longName>NRK P1+ Finnmark</longName>
            <shortDescription xml:lang="fr">NRK P1+ Finnmark</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1finnmark.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu188nonrk"/>
            <bearer
                            id="dab:fe2.f601.f713.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b7328d4a-9cd8-4aa7-8264-c388cf26d8e3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b7328d4a-9cd8-4aa7-8264-c388cf26d8e3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b7328d4a-9cd8-4aa7-8264-c388cf26d8e3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b7328d4a-9cd8-4aa7-8264-c388cf26d8e3.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b7328d4a-9cd8-4aa7-8264-c388cf26d8e3.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Trom</shortName>
            <mediumName>NRK P1+Troms</mediumName>
            <longName>NRK P1+ Troms</longName>
            <shortDescription xml:lang="fr">NRK P1+ Troms</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1troms.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu189nonrk"/>
            <bearer
                            id="dab:fe2.f601.f712.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/daae6bd0-dc6c-4bc5-add8-0eb7c6b87b7a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/daae6bd0-dc6c-4bc5-add8-0eb7c6b87b7a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/daae6bd0-dc6c-4bc5-add8-0eb7c6b87b7a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/daae6bd0-dc6c-4bc5-add8-0eb7c6b87b7a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/daae6bd0-dc6c-4bc5-add8-0eb7c6b87b7a.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRK+Nord</shortName>
            <mediumName>NRK P1+Nordland</mediumName>
            <longName>NRK P1+ Nordland</longName>
            <shortDescription xml:lang="fr">NRK P1+ Nordland</shortDescription>
            <link url="http://www.nrk.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1nordland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu190nonrk"/>
            <bearer
                            id="dab:fe2.f601.f711.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1pluss_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/631cbb8f-604c-4352-bf2e-b0821d7bc000.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/631cbb8f-604c-4352-bf2e-b0821d7bc000.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/631cbb8f-604c-4352-bf2e-b0821d7bc000.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/631cbb8f-604c-4352-bf2e-b0821d7bc000.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/631cbb8f-604c-4352-bf2e-b0821d7bc000.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.5">Oldies </genre>
        </service>
        <service>
            <shortName>NRKHord</shortName>
            <mediumName>NRK P1 Hordaland</mediumName>
            <longName>NRK P1 Hordaland</longName>
            <shortDescription xml:lang="fr">NRK P1 Hordaland</shortDescription>
            <link url="http://www.nrk.no/hordaland" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkp1hordaland.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu191nonrk"/>
            <bearer
                            id="dab:fe2.f401.ff01.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="http://lyd.nrk.no/nrk_radio_p1_hordaland_aac_h"
                            
                                cost="100"
                            
                            
                                offset="2000"
                            
                            
                                mimeValue="audio/aac"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/cc35ceca-1268-4cde-977b-99e1c3d9a19a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/cc35ceca-1268-4cde-977b-99e1c3d9a19a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/cc35ceca-1268-4cde-977b-99e1c3d9a19a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/cc35ceca-1268-4cde-977b-99e1c3d9a19a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/cc35ceca-1268-4cde-977b-99e1c3d9a19a.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.11">Local/Regional</genre>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.6.3.2">Easy Listening </genre>
        </service>
        <service>
            <shortName>NRK VærN</shortName>
            <mediumName>NRK Vær NORD</mediumName>
            <longName>NRK Vær NORD</longName>
            <shortDescription xml:lang="fr">NRK Vær NORD</shortDescription>
            <link url="http://www.yr.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkvrnord.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu193nonrk"/>
            <bearer
                            id="dab:fe2.f601.f307.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.13">Weather forecasts </genre>
        </service>
        <service>
            <shortName>NRK VærV</shortName>
            <mediumName>NRK Vær VEST</mediumName>
            <longName>NRK Vær VEST</longName>
            <shortDescription xml:lang="fr">NRK Vær VEST</shortDescription>
            <link url="http://www.yr.no" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:23047000"/>
            <link description="Nyhetstips" uri="mailto:03030@nrk.no"/>
            <radiodns fqdn="nrkvrvest.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu194nonrk"/>
            <bearer
                            id="dab:fe2.f401.f304.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <bearer
                            id="dab:fe2.f301.f306.0"
                            
                                cost="100"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/ff79a38e-f3a8-4d9a-b3f0-e1f25b9f662a.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.13">Weather forecasts </genre>
        </service>
        <service>
            <shortName>NRK Tra2</shortName>
            <mediumName>NRK Trafikk2 BTV</mediumName>
            <longName>NRK Trafikk 2 Buskerud, Telemark og Vestfold</longName>
            <shortDescription xml:lang="fr">Aktuelle trafikkmeldinger for Buskerud, Telemark og Vestfold. Trafikktips: 800 99999, SMS TRAFIKK til 1987 eller trafikk@nrk.no</shortDescription>
            <link url="http://www.nrk.no/trafikk" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:80099999"/>
            <link description="Trafikktips:" uri="sms:1987?body=TRAFIKK"/>
            <link description="Trafikktips:" uri="mailto:trafikk@nrk.no"/>
            <radiodns fqdn="nrktrafikk2btv.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu308nonrk"/>
            <bearer
                            id="dab:fe2.f901.f312.0"
                            
                                cost="20"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.12">Traffic</genre>
        </service>
        <service>
            <shortName>NRK Tra3</shortName>
            <mediumName>NRK Trafikk3 SR</mediumName>
            <longName>NRK Trafikk 3 Sørlandet og Rogaland</longName>
            <shortDescription xml:lang="fr">Aktuelle trafikkmeldinger for Oslo, Akershus og Østfold. Trafikktips: 800 99999, SMS TRAFIKK til 1987 eller trafikk@nrk.no</shortDescription>
            <link url="http://www.nrk.no/trafikk" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:80099999"/>
            <link description="Trafikktips:" uri="sms:1987?body=TRAFIKK"/>
            <link description="Trafikktips:" uri="mailto:trafikk@nrk.no"/>
            <radiodns fqdn="nrktrafikk3sr.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu309nonrk"/>
            <bearer
                            id="dab:fe2.f801.f313.0"
                            
                                cost="20"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.12">Traffic</genre>
        </service>
        <service>
            <shortName>NRK Tra4</shortName>
            <mediumName>NRK Trafikk4 HSF</mediumName>
            <longName>NRK Trafikk  4Hordaland og Sogn og Fjordane</longName>
            <shortDescription xml:lang="fr">Aktuelle trafikkmeldinger for Oslo, Akershus og Østfold. Trafikktips: 800 99999, SMS TRAFIKK til 1987 eller trafikk@nrk.no</shortDescription>
            <link url="http://www.nrk.no/trafikk" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:80099999"/>
            <link description="Trafikktips:" uri="sms:1987?body=TRAFIKK"/>
            <link description="Trafikktips:" uri="mailto:trafikk@nrk.no"/>
            <radiodns fqdn="nrktrafikk4hsf.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu310nonrk"/>
            <bearer
                            id="dab:fe2.f401.f314.0"
                            
                                cost="20"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.12">Traffic</genre>
        </service>
        <service>
            <shortName>NRK Tra5</shortName>
            <mediumName>NRK Trafikk5 HO</mediumName>
            <longName>NRK Trafikk 5 Hedmark og Oppland</longName>
            <shortDescription xml:lang="fr">Aktuelle trafikkmeldinger forHedmark og Oppland. Trafikktips: 800 99999, SMS TRAFIKK til 1987 eller trafikk@nrk.no</shortDescription>
            <link url="http://www.nrk.no/trafikk" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:80099999"/>
            <link description="Trafikktips:" uri="sms:1987?body=TRAFIKK"/>
            <link description="Trafikktips:" uri="mailto:trafikk@nrk.no"/>
            <radiodns fqdn="nrktrafikk5ho.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu311nonrk"/>
            <bearer
                            id="dab:fe2.f501.f315.0"
                            
                                cost="20"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.12">Traffic</genre>
        </service>
        <service>
            <shortName>NRK Tra6</shortName>
            <mediumName>NRK Trafikk6 TMR</mediumName>
            <longName>NRK Trafikk 6 Trøndelag og Møre og Romsdal</longName>
            <shortDescription xml:lang="fr">Aktuelle trafikkmeldinger for Oslo, Akershus og Østfold. Trafikktips: 800 99999, SMS TRAFIKK til 1987 eller trafikk@nrk.no</shortDescription>
            <link url="http://www.nrk.no/trafikk" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:80099999"/>
            <link description="Trafikktips:" uri="sms:1987?body=TRAFIKK"/>
            <link description="Trafikktips:" uri="mailto:trafikk@nrk.no"/>
            <radiodns fqdn="nrktrafikk6tmr.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu312nonrk"/>
            <bearer
                            id="dab:fe2.f301.f316.0"
                            
                                cost="20"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.12">Traffic</genre>
        </service>
        <service>
            <shortName>NRK Tra7</shortName>
            <mediumName>NRK Trafikk7 NTF</mediumName>
            <longName>NRK Trafikk 7 Nordland, Troms og Finnmark</longName>
            <shortDescription xml:lang="fr">Aktuelle trafikkmeldinger for Nordland, Troms og Finnmark. Trafikktips: 800 99999, SMS TRAFIKK til 1987 eller trafikk@nrk.no</shortDescription>
            <link url="http://www.nrk.no/trafikk" mimeValue="text/html"
                          xml:lang="nb-NO"/>
            <link uri="postal:NRK/Bjørnstjerne Bjørnsonsplass 1/Oslo/0340/Norway"/>
            <link uri="tel:80099999"/>
            <link description="Trafikktips:" uri="sms:1987?body=TRAFIKK"/>
            <link description="Trafikktips:" uri="mailto:trafikk@nrk.no"/>
            <radiodns fqdn="nrktrafikk7ntf.nonrk.radio.ebu.io"
                          serviceIdentifier="ebu313nonrk"/>
            <bearer
                            id="dab:fe2.f601.f317.0"
                            
                                cost="20"
                            
                            
                            
                                mimeValue="audio/aacp"
                            
                            />
            <mediaDescription>
                <multimedia height="32" width="32" type="logo_colour_square"
                                url="http://static.nonrk.radio.ebu.io/32x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="32" width="112" type="logo_colour_rectangle"
                                url="http://static.nonrk.radio.ebu.io/112x32/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="128" width="128" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/128x128/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="240" width="320" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/320x240/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <mediaDescription>
                <multimedia height="600" width="600" type="logo_unrestricted"
                                url="http://static.nonrk.radio.ebu.io/600x600/b8a347d0-cd03-46eb-b340-09da8b6ffef1.png"/>
            </mediaDescription>
            <genre href="urn:tva:metadata:cs:ContentCS:2011:3.1.1.12">Traffic</genre>
        </service>
    </services>
</serviceInformation>`;
