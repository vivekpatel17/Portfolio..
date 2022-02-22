import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <div>
                    <a
                        href="https://github.com/vivekpatel17/portfolio"
                        target="blank"
                    >
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADiklEQVRoge2azatVVRiHn7dCvQ28kRGVFYI16Q8oou+8KUEKDZoUQbcu2oej5kINGkXBdaAG2UAwGt1RH6AWdYOIDKQPgwYmUjfTCr2UBpbnabC3cu5yn7PXOWffexycZ3Tevdb+rfe3P9Z+99oHRowY0Y3opbM6DjwHTADXA/PALPB2RMz1k4B6c6l5PzAOnAAOAO9ExHw/mnUDPqr+YTVn1S19aL5Q7lvF7+qGpk2sU//tMGA7m3vQfD5D75z6YFMmVqjHMgbV4ujekqG5Wj2TqXlUXV6neUWGl03Arcm2GeBZYBfQats+BjyToTkFXN0Wt4CdpeZM0ncNsDFDszvq9uQIfZq070ra92doHkj22dHWFups0j5dp5lzRlYl8ddJ/FVN/yrGk/jghR8RYXucq5lj5LckXq8ug+LocelpP56heTSJHyu1KO+HdLbK0eyOxYyV8p36pvp5RdtLGZpbK/abLTW/r2hbP7CRcuCqhKv4WV2RoTemHs/UPGh5tpowsrZMsht/qff0oHmfnR+GFzimrm3ERGJmf4cBD6l39aF5r3q4g+YX6ppGTSSDTycD7lNzJo1OeneorUTzaXu8nPpJ4FQSn46IVmXPGixmqGkWFq8ngHfLaTibvo/koKjXAR9RVNLt7IiI873qLbkRdbnFFP0j8FDS/BPwej+6Vw2aWC4WxeQksAW4qaLLPLApIv7pR39RjahjFEXnJPAIna+AOWBjRBzud6zGjahXAuuAJ4HHgZU1u+wFXo6Ik4OM25gRdTXFZTMF3JixyyfAqxEx28T4TRhZpW4HNgN1L0CngfeA3RGRVtFLi/pKTVmR8l/50HyqvGcWhcW82X8A9gB7ImLwMryGpo20gA+B1yLiy4a1u9Kkkb3AtohIX5qWhKaMvBgROxvS6osmSpRDwzYBzRg50oDGwDRhpKdye7Hox8i1SXzNIC9WS456u/pxh4feN+rdw86xFvU29ZeaJ/gZ9YFh59oV9bPMcmRuMcuQgVAnKhL+Vn3DS9doVbcOO+dKyoRTExeXTNWZpP2DYeSZM9vckMT7IuIcXFxwfj9pz3kXaZwcI38m8Z0uXHNKF+bS/pcH6hMV98GMOqm+pZ5P2rYNO+dK1GXqkY7z1ELOWnylvTxRH7b4MFnH1LBzrUXdoJ7sYODvYZvo9Q8DKyk+WE5QzGanKP4wsDsifm0+vREjRjTF/0HCHwQrksODAAAAAElFTkSuQmCC"
                            alt=""
                        />
                        <span>main*</span>
                    </a>
                </div>
                <div>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIidWVyU0DQRBFfzPCF0wGQACYE0TAerXZUwDZAkEWtgkBcoA4kDmwSCDghiAAX7ARPA6ugQb3LIaTS2q1putX/aqvqW5p2M2lOYGCpFVJZUmzkibM9STpQtKppFPnXHdgZmAdeCTbHoC1QRJHwJGX4BLYB0rAmK2SnV15uCYwkocgTv4K7KYFWTFVoGMxjTyyxMnnB+h6wSOpJIEKnuY7CRgAEnw1c9/bz9EH2PY0D8qSQRAB1wbZjM/9RHFrx865j2CbKeace5d0Yp/lUAV3xj6dlCStA/PPGOQ25Gybs/gPgnGDtOOzkNap051hceyXxD7Bs+2TidFmKQRTtr+ECFq2L2fWmWwrtp/3eYAt0+8KiELROX7TG4NshAAFehcXQPUPBHveoI0G+wPWDNQBFoOgcNwS0LXY/hn4BW56JLUkuQwbWeVx8nqeakaABt92DRzYEBVtzQCHnuYAdfJc1x5RxfTMsvs0WbKezFH17qiypDn9fDJb6j2ZZ865t9yVD519AjWYM/PUx/6DAAAAAElFTkSuQmCC"
                        alt=""
                    />
                    <span>0</span>
                </div>
                <div>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABu0lEQVRYhe2UsS9DURjFz21rESoWCZFI/AEGQwfmhhgMEuGfEBIDK1YRi5b/QSwiEf+ACInBYiIVYkQjFpWf5ZPevr7X19LW0pO85L7vO/ee7/b1HKmDDn4JYAi4Ai6Bwf8Y4IgyDtstPkM1Ztsl3gM8mOiXPQAFoKcdA+x4t84Bee99u9XiY8CniT0D/UAaeLJaCRhvlXgCOPduu+D1Fr36JZBsxQDLnshpSP/Y6y81W3wQeLXDP4BRYAC4tWcAGAHejVMEhps5gO/5NatlvVrWauterTnZQKXnb4AuqyeBTWDj55sDKeDa4/8tG4Bu4N4O+wIm6tiToVnZQMDzgV7FfyDQy3n7fpcNhHg+0J/zROYCvTTwaL2a2ZCIEE9IOpCUstKKc+4lQEtGrOWcK0pa9XoHNJINxHjeOPMeZz6C03g2EOL5PwwQmw1hn2BPUp+tN51zd3VNHgLnXEHSlr32StqtuYEIz0dwY38B49WXDVR7fjJm2Gnv0OkYbnw2UOn5fK0DjV+VhDH80Gxw1hyXdKGy7c4kvcUd2iDSkqZsXZKUcc5d/0y3T/uRk8ouOGnBjWvh1TQ76EDfpTpoxemV+YcAAAAASUVORK5CYII="
                        alt=""
                    />
                    <span>0</span>
                </div>
            </div>

            <div className="footer__right">
                <div>
                    <span>UTF-8</span>
                </div>
                <div>
                    <span>LF</span>
                </div>
                <div>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABCUlEQVRIie2UMU5CQRRF3ye0hI4GWQBxH4YFYIUV0LACSn/pHpR1GHZBYdyA2osUFJAcC6/J/M/MOPPVjttM8u59977/k/fMzvhLAF2+8J7a08rMuND7+l8BA70vvwoAFkDPQ/X1vtX0PWCRlAiU+s8boB3gSqfWlrZS/8n8CEw8/Er8tFYfAwdxd43MpVlLc+XhwiEp5tI9SzcM8KchqebSfkjbiWgqIS0z2zt8EWnsmlnHzLZFUewic7ge++/mpfMVN4GAS2meIkNcO9Pf1sloCDAS/5htnhICzMXdNzJ3xN5Fw7NkqqcvmtN0ciqAB5nMPPr0UxEJDS5ZDDnXNPuSZiFlyc5ohE+k9btZet++NwAAAABJRU5ErkJggg=="
                        alt=""
                    />
                    <span>Powered by React.js</span>
                </div>
                <div>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhUlEQVRIie2Ruw2AMAwFswQISoZgqGS/LEIK5mCCoyBICOVjLEU0eeXJuifbxvT0/BpgBKyUa+SBK67Gv8oHYIuSHZhKvMvrcsACY4kDK3DEB97s+dCQchjApQZSPJbI5ZkV5xIXn0Vbon5obuUEr59FWOIzXCd/yTywZMr1cmF5G3lPs5wX0PTuAaqtuwAAAABJRU5ErkJggg=="
                        alt=""
                    />
                    <span>Prettier</span>
                </div>
                <div>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVRIie2UMQ7CMAxFbZYKcQQ4EByGiiNk5GhILGWGqdyh62MARKQ0wWmJqARPypb8Z0dxRH4GwPHCWc/NShZlAqiAGrh4HZyBLVCNDV8BJ+I0wHJM5alwX5LfCbAzhD+phwiOGYJDLEcTgk5E5sZ6OlVd5Aowht+DVHuzis/BXzBRARm/pXdmb93oUhP1hkASvN3c9x8ERubh+wBX7yraEoIN0D7W+uOCyXID4AdNsUKRw20AAAAASUVORK5CYII="
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
