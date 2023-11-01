import React from "react";

function The_role_of_handshaking() {
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
                                The role of handshaking
                              </h1>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                <span style="line-height: 16.3636360168457px">
                                  Before two devices can communicate and
                                  transfer data between them, they must ensure
                                  they are both ready to&nbsp;
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  communicate. Then, when they are in the middle
                                  of sending and receiving data, they must
                                  constantly check that each other is ready. For
                                  example, a printer must be able to say to a
                                  computer, 'stop sending data because I have a
                                  paper jam, or I've run out of paper'.&nbsp;
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  How they do this is referred to as
                                  'handshaking'. Handshaking is the exchange of
                                  signals between devices to check that they are
                                  both ready and able to send and receive data.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  There are two types of handshaking that could
                                  be used. The first is&nbsp;
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  hardware handshaking and the second method is
                                  software handshaking.
                                </span>
                              </p>

                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  Consider the following tyoical situation. Both
                                  devices can send and receive data, and at the
                                  same time. This is called 'duplex data
                                  transmission'.
                                </span>
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/ae2ba698-9d1f-4aeb-8592-0640fda2ebbahandshaking.gif"
                                  alt="handshaking"
                                />
                                <br />
                                <strong>
                                  Sending data from the computer to the modem
                                  using hardware handshaking
                                </strong>
                              </p>
                              <p>
                                &nbsp; &nbsp; &nbsp;1) If the the computer wants
                                to send data to the modem and is ready to do so,
                                it sends the modem an RTS&nbsp;signal ('Request
                                To Send') and a DTS signal ('Data Terminal
                                Ready'). Each of these signals has its own wire
                                in the cable &nbsp; &nbsp; &nbsp; &nbsp; that
                                connects the two devices.
                                <br />
                                &nbsp; &nbsp; &nbsp;2) When the modem sees an
                                RTS signal, it sends a DSR (Data Set Ready)
                                signal to the computer to tell it that it is
                                switched on.
                                <br />
                                &nbsp; &nbsp; &nbsp;3) The modem then sends a
                                CTS signal. This is a 'Clear To Send' signal
                                that indicates to the computer that it is
                                okay&nbsp;to send data.&nbsp;
                                <br />
                                &nbsp; &nbsp; &nbsp;4) The data is then sent one
                                bit at a time down the TD wire, or the Transmit
                                Data wire in the cable.
                              </p>
                              <p>
                                <strong>
                                  Sending data from the modem to the
                                  computer&nbsp;
                                  <strong style="line-height: 16.3636360168457px">
                                    using hardware handshaking
                                  </strong>
                                </strong>
                              </p>
                              <p>
                                &nbsp; &nbsp; &nbsp;1) The computer sends the
                                modem a DTR signal. This is a Data Terminal
                                Ready signal on its own wire and signals
                                to&nbsp;the modem that the computer is ready to
                                receive data.
                                <br />
                                &nbsp; &nbsp; &nbsp;2) The modem sends a DSR
                                signal to the computer when it sees a DTR
                                signal. This is a Data Set Ready signal
                                and&nbsp;tells the computer that the modem is
                                connected and ready to send data.
                                <br />
                                &nbsp; &nbsp; &nbsp;3) The modem then sends data
                                to the computer on the RD wire, or 'Receive
                                Data' wire, one bit at a time.&nbsp;
                              </p>
                              <p>
                                <strong>
                                  Software handshaking (XON / XOFF)
                                </strong>
                                <br />
                                Rather than having lots of extra wires in a
                                cable (one for the DTS signal, a different one
                                for the RTS signal, and so on),there is nothing
                                stopping you using software handshaking for data
                                communication. Special ASCII codes are sent
                                between&nbsp;devices to start and stop data
                                transmission. In fact, you only need two special
                                codes:
                              </p>
                              <p>
                                &nbsp; &nbsp; &nbsp;‘Start the data
                                transmission’ - X-ON
                                <br />
                                &nbsp; &nbsp; &nbsp;‘Pause the data
                                transmission’ - X-OFF.
                              </p>
                              <p>
                                Having fewer wires to worry about is nice but it
                                is not all good news. You need to send the
                                special characters, which may mean&nbsp;that you
                                have to send more data than if you used hardware
                                handshaking!
                              </p>
                              <p class="QuestionStyle"></p>
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

export default The_role_of_handshaking;