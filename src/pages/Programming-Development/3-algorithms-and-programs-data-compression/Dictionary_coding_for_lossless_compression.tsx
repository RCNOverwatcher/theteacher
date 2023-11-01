import React from "react";

function Dictionary_coding_for_lossless_compression() {
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
                                Dictionary coding for lossless compression
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                In 'lossless compression', the codecs keep all
                                of the information about a file. The compressed
                                file, once decompressed, can be reconstructed so
                                it is exactly like the file before it was
                                compressed, with no loss of any information at
                                all.
                              </p>
                              <p>
                                The general idea behind dictionary encoding is
                                fairly simple. Consider a book which has pages
                                in it pages, each one with text on.
                              </p>

                              <p>
                                We could create a dictionary of words and
                                phrases that are used in the book, and each of
                                these words and phrases has its own reference.
                                Wherever a particular word or phrase is used on
                                a page, we substitute it with the code in the
                                dictionary for that word or phrase. The word,
                                'compressed' for example, takes 10 bytes to
                                store, 1 for each character in the word. If we
                                substitute it for a two byte reference to the
                                word, then we can store the word 'compressed' in
                                only 2 bytes. There will be an overhead, however
                                – we need to store the actual dictionary and the
                                references but overall, there will be a saving.
                                This system isn't just about text files, which
                                are just codes, remember. This can be applied to
                                any data file.
                              </p>
                              <p>
                                <strong>LZ77</strong>
                                <br />
                                There are a range of compression algorithms that
                                use the basic idea described above. Some
                                encoding algorithms have a dictionary already
                                built or built up as part of the initialisation
                                process before compression begins, such as
                                'Huffman coding'. Others create a dictionary
                                that changes as part of the compression process.
                                LZ77 is an example of this. You start off by
                                having a storage area called a buffer. This is
                                going to be looking at the file you want to
                                compress. The buffer is split into two, one area
                                holding the start of the dictionary and one area
                                holding the part of the file that you are trying
                                to compress.
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 20px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/35f538d6-dc7a-435b-840a-650409abd400dict.GIF"
                                  alt="LZ77"
                                />
                              </p>
                              <p>
                                What the compression algorithm does is to take
                                whatever is in the 'looking ahead buffer' area
                                and it tries to find a match in the dictionary.
                                When a match is found, a 'token' is generated.
                                If it can't find a match, it can great one and
                                add it to the dictionary. The token generated is
                                a three part piece of data that gives:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      the position in the dictionary where the
                                      match occurred
                                    </li>
                                    <li>
                                      the length of the match in characters
                                    </li>
                                    <li>the next character.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                For example, 450, 18, f means that the phrase in
                                the looking ahead buffer matches the dictionary
                                at position number 450, the match continues for
                                18 characters and the first character in the
                                looking ahead buffer after the match fails is f.
                              </p>
                              <p>
                                This token is then added to the compressed file
                                which is being built. The compressed file will
                                simply be a stream of such tokens, which can
                                later be decompressed when needed. For example,
                                this token can be decompressed by going to
                                position 450 in the dictionary, getting back the
                                18 characters from that position and then adding
                                the letter f to the end.
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

export default Dictionary_coding_for_lossless_compression;