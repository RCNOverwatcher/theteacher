import React from "react";

function Multiplexing_and_switching() {
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
                                Multiplexing and switching
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />A multiplexer receives signals from lots
                                of different sources and can then send the
                                signals along a single communications channel to
                                a single destination using a number of different
                                techniques. At the receiving end, the signals
                                are then separated back out. A switch can be
                                used to make multiple connections between
                                computers and other hardware, as well as being
                                used to 'segment' a network, or split it up into
                                areas, to make communications around a network
                                more efficient.
                              </p>

                              <p>
                                <strong>
                                  <img
                                    style="
                                  margin: 10px auto;
                                  vertical-align: middle;
                                  display: block;
                                "
                                    src="images/0989fdb7-02e1-442d-a81d-b65b2c4a4e1emult.GIF"
                                    alt="mult"
                                  />
                                </strong>
                              </p>
                              <p>
                                Multiplexers are used because they greatly
                                increase the amount of data that can be sent
                                across a network in a particular amount of time.
                                This subsequently reduces the cost of the
                                infrastructure of a network.&nbsp;
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/8203ba51-fdd2-4890-b60f-6d752e64f689switch.GIF"
                                  alt="switch"
                                />
                                When a packet is placed on a network, it is
                                broadcast to all computers on the network. If
                                two computers want to send information at
                                exactly the same time, then there is a network
                                collision, the packets are cancelled and they
                                are resent, this time with a small gap between
                                them. With lots of computers on a large network,
                                there could be many collisions, which slows doen
                                the network (because packets have to keep being
                                resent). A switch is used to make multiple,
                                <strong>
                                  <em>simultaneous</em>
                                </strong>{" "}
                                connections around a network. This reduces the
                                number of network collisions that occur between
                                packets and improves the efficiency of a
                                network.
                              </p>
                              <p style="text-align: left"></p>
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

export default Multiplexing_and_switching;
