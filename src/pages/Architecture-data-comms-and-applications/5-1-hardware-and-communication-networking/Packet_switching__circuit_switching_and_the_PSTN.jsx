import React from "react";

function Packet_switching__circuit_switching_and_the_PSTN() {
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
                                Packet switching, circuit switching and the PSTN
                              </h1>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Packet and circuit switching
                                  </span>
                                </strong>
                                <br />
                                When a message is being sent, it can be sent
                                using either packet switching or circuit
                                switching.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Packet switching
                                  </span>
                                </strong>
                                <br />
                                This is a method of sending data over networks.
                                When an email message is sent across a network
                                such as the Internet, the email is split up into
                                packets of data, each of equal size. To each
                                packet is attached some extra information. This
                                includes:
                              </p>

                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The{" "}
                                      <strong class="strong">address</strong> of
                                      the sender of the packet.
                                    </li>
                                    <li>
                                      The
                                      <strong class="strong">
                                        destination
                                      </strong>{" "}
                                      of the packet.
                                    </li>
                                    <li>
                                      Email
                                      <strong class="strong">
                                        reassembling
                                      </strong>
                                      information.
                                    </li>
                                    <li>
                                      A<strong class="strong">check sum</strong>{" "}
                                      for error detection.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                When the message is sent, the packets each try
                                to find the best path to the destination. They
                                invariably split up and go by different routes.
                                The packets are passed on from one network to
                                the next, ever forward to the final destination.
                                This means that the network is being used
                                efficiently because no single path is being tied
                                up with just one message as it would do in a
                                phone call using circuit switching, for example
                                (no engaged tones). In addition, you are not
                                relying heavily on one particular communication
                                route. With phones, you are relying on the line
                                working. You cannot phone your friend if their
                                line is not working because they only have one
                                circuit to their actual phone. With packet
                                switching there may be a delay while each of the
                                packets reaches their destination address. This
                                can happen if, for example, a computer receives
                                lots of packets at once. It will have to queue
                                them all up and then deal with them in turn.
                              </p>
                              <p>
                                <img
                                  src="images/69d62481-8ddc-4ef6-83bf-059466d1caf2ch31d4.jpg"
                                  alt="packet switching"
                                />
                              </p>
                              <p>
                                <strong style="line-height: 1.5">
                                  <span class="NormalContentHeading">
                                    Circuit switching
                                    <br />
                                  </span>
                                </strong>
                                This is a method of communication that sets up a
                                communications channel just before a message is
                                sent and then keeps that channel open
                                exclusively for the entire duration of that
                                transmission. The communication channel is
                                released for other messages only when the
                                transmission is totally finished. The classic
                                example is the telephone system, when you make a
                                call.
                              </p>
                              <p>
                                A phone call is immediate using circuit
                                switching. There is no waiting for packets of
                                information. You just talk and listen and
                                communication is full duplex - you can speak and
                                hear at the same time! However, this kind of
                                transmission relies heavily on a particular
                                channel being available (not engaged). Remember,
                                with circuit switching, the communications
                                channel is reserved for the entire transmission
                                of a message and so nobody else can use it. In
                                addition, security may be compromised because
                                the whole of a message is being sent at once.
                                While data security is still an issue with
                                packet switching, a packet that is intercepted
                                on its own may not compromise the whole message.
                                It would be prudent to use data encryption with
                                packet switching if the data was sensitive.
                                Another issue with circuit switching, certainly
                                in older parts of the telephone network (known
                                as the 'PSTN') is that it involves setting up
                                transmission channels by opening and closing
                                electro-mechanical switches. This act causes
                                electrical interference, which can corrupt data
                                (causing interference) if adequate recautions
                                are not taken.
                              </p>
                              <center>
                                <img
                                  src="images/aac5cf6b-3650-4aba-95e3-e78cf14419e4ch31d5.jpg"
                                  alt="channel"
                                />
                              </center>
                              <p>&nbsp;</p>
                              <center>
                                <strong class="strong">
                                  A channel is kept permanently open for the
                                  entire communication.
                                </strong>
                              </center>
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

export default Packet_switching__circuit_switching_and_the_PSTN;
