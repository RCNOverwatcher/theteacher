import React from "react";

function Distributed_databases() {
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
                                Distributed databases
                              </h1>
                              <p>&nbsp;</p>
                              <p>
                                <strong>Introduction</strong>
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/d0722926-cf3d-4b3b-985d-a0214c2df7c4dist1.JPG"
                                  alt
                                />
                                <br />A database actually held on a server and
                                accessed via clients on the network is known as
                                a ‘client-server database’. Databases held on a
                                server like this are very secure because
                                security methods can be addressed at one point,
                                the server. It is also going to contain
                                up-to-date data on it - after all, there is only
                                one database of data! The consistency and the
                                integrity of the data can be maintained.
                                Client-server databases have been around a
                                while. Their technology is understood. An
                                example of a client-server database would be the
                                user names and passwords held by on a school's
                                server. When a pupil requests to log in to the
                                school network, the request is sent to the
                                server. The pupil's ID and password is checked
                                against the centrally-held database of
                                authorised users. The request is then either
                                accepted or rejected.
                              </p>

                              <p>
                                <strong>Distributed databases</strong>
                                <br />
                                Client-server networks are excellent for
                                networks where the clients are physically close
                                to the server, for example, in a LAN. Where the
                                clients are physically far away from a server,
                                then a rethink needs to occur. This is because
                                the time for communication between clients and
                                servers becomes important. In addition, the
                                availability of processing time on the server
                                cannot be guaranteed - another client's request
                                might be being processed. Also, a client might
                                only ever need to access a small part of a
                                database yet it can tie up access to the whole
                                database. This is inefficient. Look at the
                                following diagram.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/c68aff6c-5f5c-426a-ae4d-932865df6c3fdist2.JPG"
                                  alt
                                />
                                <br />
                                Instead of having a centralised database, the
                                database can be distributed. There are a number
                                of ways to achieve this. One way is to take the
                                central database, make a copy of it and then
                                split up the copy. Each portion of the database
                                is then stored remotely on a local server,
                                whilst the master database remains on the
                                central server. What each portion actually
                                comprises of will depend upon the needs of the
                                local users. Clients now access the data held on
                                their local server. The local server will
                                periodically access the master database, to
                                update it. This system brings some benefits to
                                users. Since the data for a particular local
                                server is now close to its clients, data access
                                and associated processing is speeded up. Access
                                to the data is now more reliable because the
                                data is local and availability of the data is
                                improved because you don't have to rely on
                                remote communications. There are some drawbacks,
                                however. Distributed systems are far more
                                complex to manage compared to a centralised,
                                client-server networkThis means that software
                                and management costs are higher. Because the
                                data is spread over a number of different
                                servers, there are far more security issues than
                                if the database was in one place only. Keeping
                                the master database up-to-date is an issue that
                                needs to be addressed. For example, you don't
                                want the data in one local server to be
                                different to the same data held in the master
                                database for too long. Also, you don't want the
                                data on a local server to be different to the
                                same data on other local servers for too long
                                either. When updating takes place depends upon
                                the application.
                              </p>
                              <p>
                                <strong>
                                  A classic use of a distributed database -
                                  Domain Name Servers (DNS)
                                </strong>
                                <br />
                                Microsoft.com and theteacher.info are examples
                                of Domain Names. The Internet has been around
                                for a long time now and there are literally
                                billions of Domain Names. Every day, new ones
                                are added and old ones become available. We have
                                already seen that the Domain Names system has
                                been devised so that humans, who understand
                                words better than numbers, can type in the
                                address (Domain Name) of a web site and that web
                                site will pop up on the screen. Of course, the
                                real web site address isn't actually a set of
                                words like bbc.co.uk but is an IP address, or
                                Internet Protocol address. An example looks like
                                this: 143.66.43.16 You can look up your own
                                computer's IP address at many different sites
                                here:
                                <a href="http://www.whatismyip.com/">
                                  http://www.whatismyip.com/
                                </a>
                                <br />
                                When you type in a web site, for example,
                                www.bbc.co.uk, that Domain Name gets sent to
                                your ISP. Your ISP has a special database kept
                                in a server known as the Domain Name Server,
                                where it keeps a database of Domain Names and
                                their corresponding IP addresses. It finds the
                                corresponding IP address and then uses it to
                                locate the server where the web site can be
                                found. The site is then downloaded to your
                                computer.
                              </p>
                              <p>
                                <strong>
                                  But where does a distributed database come in
                                  to all of this?
                                </strong>
                                <br />
                                Two people cannot have the same Domain Name.
                                There is a central database of Domain Names kept
                                by a company called Network Solutions. When you
                                want to register a Domain Name, you will
                                probably contact an Internet company that
                                specialises in doing this, such as this one:
                                <a href="http://www.reg-123.com">
                                  http://www.reg-123.com
                                </a>
                                You will type in your address and they will
                                check Network Solutions database. If it is
                                available, you will fill out a few details and
                                pay a small fee. The Domain Name is then yours
                                to use for the period paid for. Network
                                Solutions maintains the master database of all
                                Domain Names. However, every ISP will want to
                                keep its own database of Domain Names. It
                                doesn't make sense for every ISP to keep every
                                Domain Name on its own DNS, however, but only
                                those Domain Names it is likely to need.
                              </p>
                              <p>
                                <strong>
                                  How does the DNS distributed database work?
                                </strong>
                                <br />
                                When you type in a web address like
                                www.africam.com, the request goes to your ISP.
                                They look the address up on their DNS database.
                                A number of outcomes are possible.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Your DNS holds the IP address you are
                                      looking for. It uses it to request web
                                      pages from other servers.
                                    </li>
                                    <li>
                                      Your DNS cannot find the IP address in its
                                      own database, but it knows other Domain
                                      Name Servers who may be able to help! It
                                      then contacts those other Domain Name
                                      Servers until one of them returns the IP
                                      address that was being looked for. Your
                                      DNS then uses it to request the web page
                                      for you.
                                    </li>
                                    <li>
                                      Your DNS doesn't hold the IP address nor
                                      does any DNS it has contacted. It reports
                                      that it doesn't exist.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                That's how it works! The master database is kept
                                by Network Solutions. All the ISPs keep the part
                                of the master database that they think is most
                                helpful to them on their own DNS. Whenever you
                                request a web site, your own ISP's DNS tries to
                                locate the IP address first and if it can't find
                                it, it enlists the help of other Domain Name
                                Servers.
                              </p>
                              <p>
                                <strong>
                                  What happens when a new Domain Name is
                                  registered?
                                </strong>
                                <br />
                                When you register a new Domain Name, you will
                                register it with a company set up to take new
                                registrations. That company will send details of
                                your new registration to Network Solutions.
                                Network Solutions will update its master
                                database. They will then send details of the new
                                registrations to those ISP Domain Name Servers
                                who need to know! A new Domain Name can take a
                                couple of days to completely filter down to all
                                of the distributed Domain Name Servers.
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

export default Distributed_databases;
