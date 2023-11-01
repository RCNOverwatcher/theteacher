import React from "react";

function Calculating_data_transfer_rates() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Calculating data transfer rates
                              </h1>
                              <p class="NormalContent">
                                <strong style="line-height: 1.5">
                                  Introduction
                                  <br />
                                </strong>
                                The data transfer rate is the rate that a known
                                amount of data is transferred in a given period
                                of time. It is measured in terms of bits per
                                second.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  Units of data storage and simplifications
                                </strong>
                                <br />
                                The rate can be calculated by dividing the
                                amount of data transfered in bits by the time it
                                took. Before we look at some examples, it is
                                worth reminding ourselves about a few things!
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                &nbsp;&nbsp;
                                <strong>
                                  1 Kilobyte (1 Kbyte) is 1 024 bytes exactly,
                                  or 2
                                  <span
                                    style="
                                  bottom: 0.3em;
                                  font-size: 0.8em;
                                  position: relative;
                                  vertical-align: baseline;
                                "
                                  >
                                    10
                                  </span>
                                  &nbsp;bytes exactly, or about 1000 bytes, or
                                  about a thousand bytes.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; 1 Megabyte (1 Mbyte) is 1 048 576 bytes
                                  exactly, or 2
                                  <span
                                    style="
                                  bottom: 0.3em;
                                  font-size: 0.8em;
                                  position: relative;
                                  vertical-align: baseline;
                                "
                                  >
                                    20
                                  </span>
                                  &nbsp;bytes exactly, or about 1000 000 bytes,
                                  or about a million bytes.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; 1 Gigabyte (1 Gbyte) is 1 073 741 824
                                  bytes exactly, 2
                                  <span
                                    style="
                                  bottom: 0.3em;
                                  font-size: 0.8em;
                                  position: relative;
                                  vertical-align: baseline;
                                "
                                  >
                                    30
                                  </span>
                                  &nbsp;bytes exactly, or about 1000 000 000
                                  bytes, or about a thousand million bytes.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; 1 Terabyte (1 Tbyte) is 1 099 511 627
                                  776&nbsp;bytes exactly, 2
                                  <span
                                    style="
                                  bottom: 0.3em;
                                  font-size: 0.8em;
                                  position: relative;
                                  vertical-align: baseline;
                                "
                                  >
                                    40
                                  </span>
                                  &nbsp;bytes exactly, or about 1000 000 000 000
                                  bytes, or about a million million bytes.
                                </strong>
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                So 15 Kbytes is about 15 thousand bytes. 128
                                Mbytes is about 128 million bytes. 20 Gbytes is
                                about 20 thousand million bytes and so on. More
                                often than not, you don't need to know the exact
                                number of bytes, just an approximation! We will
                                also assume a byte has 8 bits of data. Strictly
                                speaking, it may have 8 bits but it can also be
                                other values. However, it is generally
                                considered to have 8 bits so that is the value
                                we will always use.
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                Because a byte is a very small unit, we nearly
                                always end up talking about Megabytes or
                                Gigabytes, for example. We should always try to
                                put a number in the most appropriate units. For
                                example:
                              </p>
                              <p
                                style="
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  32 000 bytes is okay, but better is 32 Kbytes.
                                </strong>
                                <br />
                                <strong>
                                  4 000 000 bytes is okay, and 4000 Kbytes is
                                  okay, but better is 4 Mbytes.
                                </strong>
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                We should note, that these are approximations. 1
                                Mbyte is not exactly 1000000 bytes. It's
                                actually 1048576 bytes (see above). It might be
                                better to write the above as:
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  32000 bytes is okay, but better is 32 Kbytes.
                                </strong>
                                <br />
                                <strong>
                                  4000000 bytes is okay, and 4 000 Kbytes is
                                  okay, but much better is 4 Mbytes.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                The same idea applies to bits. We wouldn't talk
                                about 50 000 000 bits when we can talk about 50
                                Mbits.&nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  We wouldn't talk about 30 000 bits when we can
                                  talk about 30 Kbits.
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  You also need to look out for how the units
                                  are written. You will see KB (and MB, GB, TB
                                  etc) and Kilobyte when talking about bytes of
                                  data. You will usually see kb or kilobits when
                                  talking about bits, and when talking about
                                  transfer rates, you will typically see bits
                                  per second written as bps, or kilobits per
                                  second written as kbps. To avoid any
                                  confusion, just write out the whole answer!
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <strong>Baud rate</strong>
                                  <br />
                                  Another way of writing down the transfer rate
                                  is to use the baud rate. 1 baud = 1 bit per
                                  second so 56 kbaud is 56 000 bits per second
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong>Example 1</strong>
                                <br />
                                <span style="line-height: 1.5">
                                  If you transferred 50 MBytes of data in three
                                  minutes, what is the data transfer rate? 50
                                  MBytes is the same as 50 000 000 bytes
                                  approximately. There are 8 bits per byte, so
                                  we transferred 400 000 000 bits. Three minutes
                                  is 3 * 60 seconds = 180 seconds. The data
                                  transfer rate is therefore given by 400 000
                                  000 divided by 180 which equals 222 222 bits
                                  per second, which we will round to 220 000
                                  bps.&nbsp;
                                </span>
                                <span style="line-height: 1.5">
                                  We should always use appropriate units as this
                                  is not an exact calculation we are doing. We
                                  can put 220,000 bits per second into kilobits
                                  per second by dividing 220,000 by 1000. This
                                  gives us a final answer of 220 kilo bits per
                                  second, or 220 kbits/s, or 220 kbps or 220
                                  kb/s or 220 kbaud.
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  <strong>Example 2</strong>
                                  <br />
                                  An Internet connection is working at a data
                                  transfer rate of 768 kbps. How much data is
                                  downloaded in one minute?
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  768 kbps = 768 000 / 8 bytes per second = 96
                                  000 bytes per second
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  In 60 seconds, you can therefore transfer 96
                                  000 * 60 = 5 760 000 bytes per minute, or just
                                  under 6 Mbytes of data can be transferred in
                                  one minute.&nbsp;
                                </span>
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculating_data_transfer_rates;