import React from "react";

function An_introduction_to_packets__IP_addresses_and_routers() {
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
                                An introduction to packets, IP addresses and
                                routers
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                There are a number of common terms used when
                                discussing networks. These include packets, IP
                                addresses and routers.
                              </p>

                              <p style="text-align: left">
                                <strong>
                                  Packets
                                  <br />
                                </strong>
                                When you send or receive information across a
                                computer network, for example, when your
                                computer downloads a web page from the Internet
                                or you when you send an email to someone in
                                another country, that information is broken up
                                into fixed-sized 'packets' of information before
                                being sent. Each packet contains&nbsp;a little
                                bit of the actual information you want to send
                                or receive and some&nbsp;extra 'helping'
                                information.&nbsp;This includes:
                              </p>
                              <ul
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The&nbsp;
                                      <strong class="strong">address</strong>
                                      &nbsp;of the sender of the packet.
                                    </li>
                                    <li>
                                      The&nbsp;
                                      <strong class="strong">
                                        destination
                                      </strong>
                                      &nbsp;of the packet.
                                    </li>
                                    <li>
                                      Email&nbsp;
                                      <strong class="strong">
                                        reassembling
                                      </strong>
                                      &nbsp;information.
                                    </li>
                                    <li>
                                      A&nbsp;
                                      <strong class="strong">check sum</strong>
                                      &nbsp;for error detection.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  How do packets help communication across
                                  networks
                                </strong>
                                <br />
                                After a message has been broken up into packets,
                                they are sent across the Internet using the
                                cables in the standard telephone network. If you
                                were sending an email from the UK to someone who
                                lives in Australia, the email would be broken up
                                into packets.&nbsp;Each of the packets would
                                then be sent by different routes to get to
                                Australia.&nbsp;It is only when all of the
                                packets have been received that the message can
                                be reassembled and read.&nbsp;If there are lots
                                of different routes you can use to send a packet
                                then it doesn't matter if one route is not
                                working (perhaps because a cable is broken or a
                                computer or server is not working) or is very
                                busy. The packet can automatically be redirected
                                via another route.&nbsp;Of course, there might
                                still be a delay in a computer receiving all of
                                the packets for one message.&nbsp;Because of the
                                potential delay, communication is not always
                                instant.
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/94b93610-4c1a-4ee5-ae79-8d1b9ca1c571ch31d4.jpg"
                                  alt="packet switching"
                                />
                              </p>
                              <p>
                                <strong>
                                  IP addresses
                                  <br />
                                </strong>
                                As we have already said, when you, e.g. request
                                a web page on the Internet, the web server who
                                hosts the web page splits it up into packets.
                                Each packet is then given some extra
                                information, such as how&nbsp;to reassemble all
                                the packets that make up a message, the sender's
                                address and the destination address, known as IP
                                or Internet&nbsp;Protocol addresses. A typical
                                address looks like this: 123.101.10.114. The
                                packets are then sent on the Internet, each one
                                going by&nbsp;the best route available at the
                                time, being constantly re-routed towards the
                                destination by the routers on the networks that
                                make&nbsp;up the Internet. In fact, each packet
                                in a message might arrive at the destination by
                                completely different routes. This is why
                                the&nbsp;Internet is known as a 'packet-switched
                                network'. But how does each packet 'know' which
                                route to take? This is where the&nbsp;routers on
                                the network come in.
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <strong style="line-height: 1.5">
                                  Routers on the Internet
                                  <br />
                                </strong>
                                Each LAN connected to the Internet has a router.
                                Consider your school's network. When you send a
                                message or request a web&nbsp;page, you are
                                sending/receiving packets of data. The router on
                                the school network exchanges information with
                                other routers on&nbsp;other networks on the
                                Internet. They tell each other how busy a
                                communication connection is between the routers,
                                how quickly&nbsp;packets are being moved along a
                                section of the line and whether there are any
                                problems on it, for example. The router can
                                then&nbsp;look at and evaluate the information
                                it has received from the other routers and make
                                decisions about which way to send a&nbsp;packet!
                                Routers are key to the workings of the Internet.
                                Without routers, the Internet could not work!
                                You can see for yourself&nbsp;the route that a
                                packet takes using the 'tracert' DOS command! Go
                                to the DOS prompt on your computer and at
                                the&nbsp;C:\ WINDOWS prompt type in: tracert
                                www.theteacher.info and press Enter. You will
                                then see a list of:
                              </p>
                              <ul
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <li style="line-height: 20px; list-style-type: none">
                                  <ul>
                                    <li>
                                      all the routers used in transferring a
                                      packet between the site and yourself
                                    </li>
                                    <li>
                                      the times a packet takes to travel between
                                      your computer and the router
                                    </li>
                                    <li>the name of the network router</li>
                                    <li>
                                      the IP address of the network router.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>&nbsp;</strong>
                              </p>
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

export default An_introduction_to_packets__IP_addresses_and_routers;