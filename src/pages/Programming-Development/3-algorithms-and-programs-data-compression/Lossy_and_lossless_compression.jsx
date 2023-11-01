import React from "react";

function Lossy_and_lossless_compression() {
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
                                Lossy and lossless compression
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Files can be compressed using different
                                'codecs'. A codec is simply a program that takes
                                a stream of digital data and applies a maths
                                formula to it. These maths formulas are called
                                codecs (short for 'coder-decoder') and they
                                compress the data stream file so that it is
                                smaller. There are two different approaches to
                                using codecs to compress files. These are 'lossy
                                compression' and 'lossless compression'. Lossy
                                compression is often used for sound, video and
                                picture work whereas lossless is more often used
                                with text and data files.
                              </p>

                              <p>
                                <img
                                  style="float: left"
                                  src="images/1a85e05e-6edc-4b2e-abf1-b19baf880f6dLossy.GIF"
                                  alt="Lossy"
                                />
                              </p>
                              <p>
                                <strong>Lossy compression</strong>
                                <br />
                                In 'lossy compression', a maths formula is used
                                to remove the parts of a file which are deemed
                                relatively unimportant before compressing it.
                                The parts that are removed are not normally
                                noticeable by most people.
                              </p>
                              <p>
                                In a sound file, for example, there are some
                                sounds that are out of the range of the human
                                ear so these might reasonably be removed. Some
                                popular lossy codecs for sound include MP3 and
                                OGG (Ogg Vorbis). When a file is saved as an MP3
                                file, a tiny bit of sound quality is lost. Most
                                people wouldn't notice, although a musician or
                                sound engineer might. They might prefer to save
                                files using lossless compression, such as FLAC
                                or ALAC.
                              </p>
                              <p>
                                JPG is an example of a lossy picture codec. Each
                                time you save a picture as a JPG, a little bit
                                of information is lost, although it would be
                                hard for most people to tell the difference. Of
                                course, if you worked in graphics design, losing
                                this information might be very important so you
                                might prefer to use a lossless method such as
                                PNG.
                              </p>
                              <p>
                                Lossy movie compression formats include MPEG4
                                and WMV files. These squash raw movie files
                                down, removing the parts that you probably
                                wouldn't miss or notice when watching a film. If
                                you needed to retain all the data in a film
                                after compression, so you could get back the
                                original completely (perhaps for further editing
                                purposes) then you would need to use a lossless
                                video compression format, such as Huffyuv.
                              </p>
                              <p>
                                <strong>Lossless compression</strong>
                                <br />
                                In 'lossless compression', the codecs keep all
                                of the information about a file. The compressed
                                file, once decompressed, can be reconstructed so
                                it is exactly like the file before it was
                                compressed, with no loss of any information at
                                all. This would be very important if you needed
                                to get access to the highest quality file
                                possible, the original file, without any loss of
                                data.
                              </p>
                              <p>
                                In a sound file, for example, all of the
                                information that makes up the file is kept if it
                                is stored using a lossless codec. The file
                                format WAV is an example of a lossless codec.
                                Lossless sound codecs give you a smaller file
                                than the raw sound file but give you a very high
                                quality sound. Lossy sound codecs, on the other
                                hand, give you a much smaller sound file but
                                with some loss of quality (although most people
                                would struggle to notice the difference).
                              </p>
                              <p>
                                GIF and PNG files are examples of codecs which
                                take a bitmap and compress it without discarding
                                any of the original picture information. Huffyuv
                                is a codec that can be used to save raw movie
                                data so that it can be reconstructed without any
                                loss of data in the future.
                                <strong>&nbsp;</strong>
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

export default Lossy_and_lossless_compression;
