import { PrevContent } from "components"
import { FeedMainLayout } from "layouts"
import { feedPrev } from "modules/feed";

export const AllFeedContainer = () => {

    const example: feedPrev[] = [
        {
            key: 1,
            user: {
                id: 'user01',
                nickname: '닉네임1',
                profPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrdnOcO4iJmjpEFGd0L2oBBtKsP18SxwD5mLCHB1PecLap2ONghgxl4yYFr_S0gaN5Q8&usqp=CAU'
            },
            regDt: '20231001 15:00',
            contents: {
                content: '예시데이터예시데이터예시데이터',
                url: ''
            }
        },
        {
            key: 2,
            user: {
                id: 'user02',
                nickname: '닉네임2',
                profPath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYZGRgaGhwaHBwaHBwYGRwcGRwaHBoaGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ0NP/AABEIAN4A4wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAMEBQYBB//EADoQAAEDAgQDBgQFBAICAwAAAAEAAhEDIQQSMUEFUWEGInGBkbEyocHwE0JS0eEUI2LxB3KCohZTkv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAICAgICAgIDAAAAAAAAAAABAhEhMQMSIkFRYQQTMnGB/9oADAMBAAIRAxEAPwCKQQwxG9jy+qqn0/iaPhIuBqJFiZ0TrMUTIYS4AyPf5X9U9WY10TaZvpOl/mV0SamlXogk4lbSGeqGOBOSY2m1jOxurjFPhsDl426zqq91UMey0jvCR1GvyQ4jE5hqfSfONVOM+sXFbY8otux+jUzyM2UEam3vr/CmMpgRldIJmLQD0i/kob8HLQ5zQZjT1mOanh7WgR8/Cd9F0QTSyTlvAbaV5JJPy9NPNFI0keHRQ++8w6Gt5Az6O3/nwUrD4djfhEHSTJPqVeMm3gm40HCUIoShOIDCUIoXQFjAALkI4ShYwEJQjhKFjAQlCMhchYwMJAIoXcqxgISARQlCxgYShGAlCxgIXYRQkGrAG6jCdPvzUarPfJsIA8uc/eilvMCYn3TD33M6EHabRfw8FOVFIgCp/iUlIpkwIBjbRJD/AEJnWFrQAJ0PRWmBczvON4AHPnFvRU7CC0XmBsOttepVq17svdZOY7XJ3E8mgRrryXn8WHZ0NWQ8ZTcXsDN5nkBuT5J3C4dhdLjmgXLeulht/C695D2mMziHBoOkmJ9lOD2U2tbEEi5HxdTbdUglVs3J8HGuzS2coaBl1Dj68/omaddzsoykxrubGDdS6LAAWuANrE3zbieRUbh7HN75aLidTME26K7TbVEr2TmPBluU22/1p5p5pnaFynTaCY1Nz1TsLpX2SYGVKEUJQsAFchOQlCxhuEoRwuIgBhKEZSIWMAQkAjhKFrCBCQCJdhA1AEJEIKr4MJxj5Qs1YOQuwjhKE1gAhKEYCUIGIuJB7scx/CQw0fCTIv0PU9eqDFtc0y0Zs3dy2HUEE+HzUhr2kTpbz62U7VuynoaNIfpPlKSkSeQSW8Q0zEUBoAZteJPt0WpwFN2Xu91jh5g7wORUTs+xglxgOJgbQDaB6K/XPw8SjG7KTlboo8Kz++2bw15HnH7qxxeHDhOUEgeBtyKrsA7+9M6Md7t/lWFQySQM2gABjxPJPxV0oHJsawbw4OY4AHUDpaD1TeC75IdPdDQdpiYB9ZhSK7mQC/ukQJ0N7RZFhi1rXEGZcTJ3P+oHknWGkxXptEgMA0XU3TeSJMRe99OieVbEoGEoRrkLWAGEoXYUnC4F9QwxpKDkkshSb0RYShanC9kyR33QeQU09lqcG5nmov8AJgvZRcMmYmEoWsrdlR+V/qqvFcAqsuAD4J488JaYr45L0U8LhCcdTIMGyEhUsQB1kLXyB10UfEVTmA2M3HsiwdUZJnpO5jZIp26C4ugS85i2PCdFxjIdyGv++QTWJMEPba8EG+/VceHOIIEDUzyi5CTtkesFkwyAQuwmsM8Qb7+p6KSArJ2ibVDcJGyOEFUWNwLRJ0krGSsiV6oBLXzEd0jU+EKMx7swMAjUH81xoRoSoznEdw6gHrDuY5gwpIwhygt3AkbGdS3kei5lJyZZJJDra/MHzELiYy1NpPXKLpJvIxWta45ZksOWwGkzefI6rQYHClgJzOv+U6A+GxUuiyAJid45qNiXlzgGuAifXkh1UYiptsocBislZpIJzS0Aa6g29FoMQC2HgSBd3ONyBuqKnhnsqsnLMHR2kj+FcOqOs15LQREx7pOKWCnLHIWIph7czCARBa46feqDCszOcXD4XWPN0d4hcaMpvAaTYDRx2J6wiZYBv6nOJ5kSb202T7lYleIZrgnK2I3+sRqnW1iTAafO1uY5oWUQ0gwJ2AAAHgnqT5nSeQvHiqqxAoXWtRNYSYC0fCOFAAOeL6xyS8nIoLIYwcngjcK4A55BfZvzWwwuGaxoawAAIaQgJ4Fedyc0pbOuPGooMFcKGV2VGylChNuYjJQOctYSh4twYPOZtisticI5hghehEqFWwrXfEJXTxfkuOHojPhUso82xmHn9I5OiCo7Gljy12hBdbSefhutpxXgbHDRZDiFB7HBpEgTB3I5FW/ZGWUR6OOGQSyTbbTfyMeCkMqHLk6wRqeX0KiNdIMQ2DNtinKViR4X5k7e6MX7M0SsOBtYC+oHzU2i8k8wdP3ULBU4u5vOL2taVIda826aq0W0iclkmoKlPMImPIHTxTjdAkWqvoQqsRgjnzQAMty0G5mdE9hwCIETe3TYjkpRmADa40lcqtv93U1FJ4H7WRg1wtmcPEc78klKa4/qPmEk9IFsbpExJJPlDfn5KNi3iiwl7R/dIyPbezTLgG6yYiVGwtCpVyMaXODiBNwBzzdAg7UvzPAY3uU4ay1oFiRykyuLmk2lFHRxRV2ya7EsfhxVDARTqZXviIDxlgg3IGYX0sncS5rw0A5gYuNPVR+z1QObicPrnp5wPCRPzb6Jzh9cGjJEEXMDkb6eCH48lTiNzR0xVWj4D3bgi8iBuCdE7hhIkETEEnoo2LrgteXQ7LBbtG1x5p7D90NDzDss20kC5J3V0/Ii14jzWn4nWHL78k/Tg/D8uf7qn4jiiXNAmCJF4uFfdlMJILjqXSdPotLmUWwKFsveDcOjvO1K0DWQJCbw1MABSgIXnTm5u2dsIqKpDLKoTtOqCs/2u4o7DYd9VjA5wIAzfCC4xJAufDoo/YXGYivTNSuxoE91zQWh0gT3XaRz0KVp1Yxqs6TqgAklIMusj/yHxR+HptyMJDjE6NB2zEXjVIk2zNo1H9U06FEXyvNOxXax9SsKD2NfmkNezMDadQ8mRA1svRcnQn5ItNMyHZXCETB5fNEhZiNWYszx7h4c0mNlrHhV+MpAgqkJULKNo8o/ALc4+/JOgd0lwy6BsDU+C3DaDLhrWB3Mtk+Sy3FsK8PlzsxmRaw+gC6YS9EJRobFM6ySCDlER4JPe6Qy0iJdynaPD2RYZ2UnM6YEg7S64j5phji50yJJk9P3XTZEtsOIGUnMRqUbwYtquUKZbq6Z+9vuyJ5VloQEi/koz2EA3JE+YUwsBTNcRrbqPqg8mRwVAdY8yki/pWdCkhkOAsO/JSe9h3DGb/FrEcgT6qtxLGOw7nMM5Qb6HW4MqzrtyZGMbLaYAhsDvvu53kCPVRuIMDaNTKAJa4nxj+FzQXZOT9l5Pq1Fein7O1gzHUj+sFh/8mfuApdLBxVrUpINOoXNGktdfb7uqXC4nJWovi4cSI6iFp+NkMxdKuPgrMDT47e4UON9ZotJdoMrMY9uRzXAh4eASbkiwzA+Cg4rFOIF4vr0up/aR3fYItEk8r2j5jzVXUdLABJDbBuw139FTk/kyC0hOa95aDMviOZXqPAcEKdNjbWHgvPOzk1MU3MJyj00j3Xq2GZoueZaKJ2H0TrzCCk1OuCiVI2KwtOoAHtDgCHAG4kaH5rI/wDJvF6lHDMZRcWFz+85toa0ExbYmFc8ZFVgLqV+hXlnaHiVeq8MxI/DYJl4BeOltk8NmcbHexvGq78S0/ikNLwS2TGXdsaX5r2KuadRpY9ocwi4cJB8ivBKbqdJ2ZmJY5wu3Kx0eE81dYDt1i/gbSDz4n5xsmkvgzVbPT+E9nMLhnuqUmQ87kzlB1DZ0CtH4pgsSvOcFjOIYkw/LSZ/hOY+Z0Wz4TwgNaC8lztyTJUpNhSRaNqzpKOTyRtZGgSdKCN/Q08KJXBgqY+VErGE0TMoa4hxssz2hwz2tkOOUx7rV4p91T8ao52E6HkdOi6IPJGSszdVhzZBfLAtoLak8gnsJRDegmJ0JgwD9802ysQe7+YAGNRt7+6lFrBlNzHh9F1xOZosWHYDz6pio+4Kca4m5ETYDkP3n6KNWBgqjkBIl0nLtfTzHuE02yeqtBaB1HuP2RTA4g/07OvqUk/kSRFBptMX1Nz4lROKU/7VTkWHytsrCFE4oP7L/wDo72U3SjSHWXbMOxxzU7kOLxB5SQFsO0VMOwbHXzUyBKyDW9+l/wBmx45hqt2aJex9PKbtmNrG8FcbVxs60/KjPPxILGPIuWxc90AAyP46JilUY2m6HQ7wsdDM+aaoMLXlhaCWF5Aee6ARv5+6ebTFWSWmQI7sASN+XqnjclZKSplr2Jwv9xzw7MIAtz3HsvTMNTWG7A4TKxztiRHkLrd01zz2VgsEltkiVxsJFSZQB91Qcc4DTrscxzdd+XVaEhNuYltrQ6PNMP8A8e0mvnMSNrLU8L7MUKMljACdTrKvsgHROtRcm9hpDGGwrW6BTGhCEQKArDlCSlKFxWFQ28qJXfzUp6gYlPExScVdAkLO4qpUIvOto3G6ueKviyg0oeLiR+y7OKKaOfkk0yq4ZUBLu7cG/I8vqrNmDZ8TgJOwsAmuG0g19VvJ1vAi/wA/ZWELpjojLZBqkC6bquhs7J+q2HeKi1pALdtRug2FIWYkqZTuIm8yFELxGvny+7o8O/ZCMqC1aJf4jv0+iSTsS0WJFkk/ePyL1l8EhRuID+0//o72KlOVVj8WPwXyYt8jA+qWckkGKyjL4l/fpBog5mcjBJHyW9wziCOvdv1t9V5+97fxmGWuAcy2xAyytgzFZ3CJa0XndxHsPdc8X4tFpPyTKHHMYMSWkENDg11zvv4T7K9OFaz4BGgAGniear+1mF/uCqDZ7WSBzGaT7KdhcVnpMfN7ZvEQD7LcUtpm5V8Gk4JTDGBoAG9uZ1V9TWY4Nig4kcjC1GGuFzcmysdEhjJRxC6wrrgpUNYEIiF1oXHIG9glspt9HkjBRZkHkbJFaHBPtcV1zgFxtQIJBbs7KF3RFIKYqSE+gI46VCxLkb8Sq3EY0R1TxQJFRxhgdbqmWCL7DRO4iqC5RMZV28/RdvG0onJyK5HKD/7ruRaPkpjmqnwj3B7S8wI+StX1QBIv4J4yuxZLQDxNj6qDi2wDGkXViys06EfzyUfHUpBI8+qLaegR2QXPGWPnpO6aFUgSNSRA5p12FGWSesbJmgZzPi8d3wNp+9lKTei0V7GDTZ+a53Mm6SdSS0NbOv4znB2nQbdZ8o9VWY3iE5jqJkjpPJQaObLp8QgefP0hRzReZkHSLX3hQlyOWySjkGq8Zg7mZCtWcRcAA359VUVaJlgcOcAHTzT9OjYTmO8/RDsxqYeP43Ue5rHwMkDn59dV3D41xlrC6ASTsLc1He0OIAnuu0N/OfRD/SvcQxs94kkDrueuq3ajNNml7J8Y72Vx+I6/eq9OwGKBaF4mQGODWSC0jXW0T5rb8F4oYDSSUrfZlIOsHpVJ9tU5mVJwzM8ZjpsrVKVodzLhMoV0JGagXWQOfCOoJCrMdXhpjUbIIZaHK9Tkm6ZvJWUxPaVwJYGOzH82wG6jHtG57gA1zWttJ/MeaKi7CbgV7xKfNcQsYzipJkWnVT6OMc6JVawJ7J2PcBdZbH4o5tYPNWXFMZDS2Vl6tYuN1SKEkydSrEmSmK8yfApzDMJbmH++aYxjwADtp1ur3SySezuMdETsIP8A5WH0QUqz2gs7uXVt9OY9VWnFEvGsSB6GyYxGKLXFk6SOkdFNzV2FrBZYXGlrp1AP15q3pVi9j3zsQBNlmKFQBpA3MFW7QadMzq6zROvUgaIxk0J1tkuu3OcjbtABf15NTTxdx2MD/aPhuLa2WeB8SdZU1zO+bai4VFTVhbzRAFIJKbk6JKfYp1Zk2uDTECI03EITVEGx6dYsF17criA7NtPh8R8NFHzB0kzplG1zM+i5RUx0glhcYk+20fe6IUCPSTCcD2xp3Wtttfx5e6Brz3bza/isgugBSGaQPQTP3ClPaCwAAgmfLYBNOq3hgvpO09EYxGQtA70G86GbSg7NKS0NPwYDnNJJy6O1vAkTy1UzheNaKrGkSJ12so1as54cQJDiRf8ASB7yU3TaGlpF3a3OkIr5Mj1zAYiQI0VuwyslwDFh1NhnYLS4arIWkVWSWkU2HQuPrKbY6yOBypeKCHg6AgzylWbaioO09QhoN9fJaOQ1RQcQpDMVWupgI8RisxUcvkQnpmsfpPhTmYstVWwp1hkwniIwcfiiRKrnNeW9xpc7oJMb6IOJYoh5YRoVb9lhLyeTb+aqnSJ1boHhlV7WBjqNSZN8pi6ZxmFqPmKTxy7pufuFtAiICSU3LDGXGkecM4RXJk03xPIqXi+D1Hkwx4vbunkt5C6AhdB6HnzODVQAAx+nIqbSwVf8zH2blG1t7dVtYXQFuzN0MVT4e8PzGm88oEXVix1WZNJ5tGnmtIuSipyQP1ooPw3/AKH+iSvpSW7spSPKaomHOOji0gXgkS0eZhMPxAs0c7c/L903iKzTIZYGDJmRlHjpHsmHPMyZGkbkDQj3SJYOImYiqXdwTt6C2u+i4CQbna/7dVDbiWNdnAJjQkxpyaLDbmpLeI52kQ0QbS0EX2LhuUaYxOwD5DnWAA35Hl97+oMbMuAMTd0S0cvBQquIcQGQ3XQSGgRve5T2Gp5YJEkyYmfO203grONGSsdq1TlDWEZQbkTr9yiYQGtEjMT8XTx2TbaTiNMrZOurjvE3IXajgWgSABaAR98kKwMaLs3j8jnNJsTIW7w3EAAIOq8owutzG4yi1ufVaPDY1zIa4+B2On7oMrBnorMUC2ZCZdihFyAsoziTg2ASE1X4k8tgAT10KVxsqma9uI5GVD4riWObkMGdli28VxEzlIMZdba6qxwLHue1z1oxoLkTanBmO6JhvBGzqrcuTFXFMb8T2t8SEysVla3ggn4lMocOY06Jh/HKDfzg+AJTDu0tH/L0TqMhe0R7jPBWV4JORw/MNxyI3T/CuHMoNytMzqTuqit2nYPhYT1JhMf/ACk/oHqj1k0btE1YKJZMdqj+gev8I6XaR7rBnkFujN2iasQilQMNi8zQXDKeRsnzXb+oDzCSh7Hy5cKYOKYNXt//AEExU4nSGr2+s+y1MFomrsqofx2kNC5x/wAWlNP404/BQeepBhNTB2ReW5hJZr+sxf8A9f8A6/ykt1YbR522ZMQXETHzy3339FGJBcYc4cwY8YDp3hSm4PMWvYe7O20RrOmyjYikWnK/u+lweqMaOPQL8K50wNOWiceSxjW7nvGPIewTVNkO1BkbOG3gpJfqCIG28Hn1H7rZNR3CZbuvYeE6nZSsE97WB7ha+Um0Ha6HDYB5aDHnYNvG6mDAHKXA2bzAMmwgA+CDYysh1nuJLj8R3J23j9IQ4HDl5Mw3SAB7E/d1NoYIEEvJzakn5DorjhfZ17yXSWNizoiZN4G9uaDaQ0Vb0MYN4YXZ2yGjXfy/Y8lbYPBVKsEDK3UOOm2g1MjxV1guDU2QYznm76BWOYN+5SWWjEh4fhrGC/eJmSfp0RPwtJtyAOpNlG4rxZtJuvf5fusTj+IvqEl7vAbDyVIx7GlJI1tbjGGZMQ4/4ifnoq3E9rDfIwDxv8gsq96bcVVQiifdlxieO1X6vI6Cw+SgPxUqJKElMqQrsknELn4yjAIgEbBQ+aq6XpkBOU6ZJiJK3Y1BterHCYp4EMhvM7x4p3B8Aqvvlyj/ACt8lZ4vCtoU8pgvPmlc1odReymY973AFxJJ3K0WH7OyAS/yj6yu9nOHCM7gOi0TeijKdPBSMcWyup8GojVgJ6z+6ep8NpC+RnpKnBcjzSdmx+oFGmB8IAHQBPAIWndFmQsPoXl7pLsHqkjbAeRsw5BDGAFrJc52hLuvQWgJnD0xld3SC6wF8pi5MemnNXT8Ux73ECARYOkGI+IDmm6lJjSHuJENIsYJO0eQ80exy/RE/orUw1g7pdECJzQbnWAZInmnhw6xE5bj4YMRtfn9FMoVmuZPeIm2uaLbeFoVjw/hNZ7g7KGMOpeIcZGzd/ksxqvRQuwQztL9WAZXOsBAsSFfYLhjq7JYC1pJ7zgQDN5A9PsLQYLgVJkEtzuG779bDRWoZCVsooZyVXD+C06ZBLQ50C5H0Ks07LRqVzLZBsqkkNk7fymiU/lESP4TR9kAma7T4IFucAkrGvC9Rr0A4QRI5KjxXZmm4y0ub4XHzVoTSVMlKF6MK5q5lWsf2Sf+V46SIUKp2ZrgwGg+DhHzT94/IjgygDFKp8Oe5heGkgGLXPoreh2XrnUBo6mfZavhnDRRZlBLjqSRF+iEuRLQ0YW8nmv4RGqeoYR7zDWOd4Alen/07JktBOugJTjaVpFkv7foP6zC4PsvUcQXkMHXX0Wj4dwNlLQZnfqd9OStwy2icLVNzkx1FIZqPht4gBZGo41645T8lbdosbAyNiTqu9nsBDc+hKZKlYrdui5w9ENaABYJ3Jy++kLmUzARtPJIx/oFzVxrOoKPKevRciFjHMo56JDpfZEOVufOJ/hE1wmIP3/pYwP4ZSR5x0SWMea1A+qRlZmtYtgu1+Quee6tMB2TL+/XsepzO+RgLWUMIym2GNDRc2EHYE9SpRpgAeEo2SjxpFfgOF06LQGNEjc3PjOynlnr5fPzRAE8pKIU5seWyBSkNObudOi6QYkaI5XJWCNuPL9l0ttddDLTygJMOx6rUEEzECyHKnMvVNNfeL3QME1qEsP+kgYMja3ukCsBsRp8z1SYy3T72Qzfn4oqd+g10C1GsTWDmuOYk86Jzp5I0axsHnco84IP38kDilEk6LUYMN57/fkovEMR+GwuPkpEyFlO0GMc52WTA2TQjbBJ0hjBUHVqsnxPgtpSphoaBEAKq4DhAGTzVzTaD92Rk7YIqkcafWNEJJjr+y6f9pZdb8kgTgcdoj1Sjn58km3PJcayRfaZtqsazoneZ8FwgXBXW3vzXHNET4rBCzHr6/wki/D8PQ/ukjQD/9k='
            },
            regDt: '20231001 14:00',
            contents: {
                content: '예시22222222222',
                url: ''
            }
        },
        {
            key: 1,
            user: {
                id: 'user01',
                nickname: '닉네임1',
                profPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrdnOcO4iJmjpEFGd0L2oBBtKsP18SxwD5mLCHB1PecLap2ONghgxl4yYFr_S0gaN5Q8&usqp=CAU'
            },
            regDt: '20231001 12:00',
            contents: {
                content: '3333333333333333',
                url: ''
            }
        },
        {
            key: 2,
            user: {
                id: 'user02',
                nickname: '닉네임2',
                profPath: 'data:image/jpeg;base64,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'
            },
            regDt: '20231001 10:00',
            contents: {
                content: '4444444444444444444',
                url: ''
            }
        }
    ];

    return (
        <FeedMainLayout>
            <div
                style={{ marginLeft: 20 }}>
                {
                    example.map((value: any) => {
                        return (
                            <PrevContent
                                key={value.key}
                                data={value}
                            />
                        )
                    }
                    )
                }
            </div>
        </FeedMainLayout>
    )
}