import React from 'react'
import * as d3 from 'd3'

export class Matrix extends React.Component {
  state = {
    data: [
      
        {
          "id": "5d7b6efa77bf6346e1805847",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa383c83014a65d6ac",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaca5aea5187c14004",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa802a04e25b72881d",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa1fbba9744816fb48",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaa71f840d17c7a670",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa2d6db28e32dcbb8d",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efae11a33e7697f7b93",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaec36a4da240ebb7e",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa0385c9d29290dfdf",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa3094134c7eef0f03",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa850dbf8b09dcbc1f",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaad9e22cd0d239952",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa714f1485d65b1cde",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaceb27942aa7c5cc8",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaabe270c7bd97c9c3",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa0993236cc6ef4700",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa8dca766cf1791ade",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efacbed96aad2405b9d",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efae1bc864c34fe04a5",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa4d3732210958136e",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa6954102b1298e5b3",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efad36e612bd08a965f",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaa1581b6c7a4e1574",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efaa0ca092bae8a97c4",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa55958d718db71b50",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac07718ebec620c27",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa40f5be4fef4f8fff",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaca7d3f3087d3c716",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efae6d9e747ec7f6705",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaf618245d28a758cf",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa98dedda522993860",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa570420d30763ec13",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efaa7defa57c2164121",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efacad882f65eb543af",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa9bea942151c57333",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa870792c7219a996c",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa7f3e822be4b94cef",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa544ac9ac662fe7c6",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa76cfb0a7e2b39cfb",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaeb2fd959e1face90",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa92ce9908f26b6394",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa291130e55abc8a12",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efae741caabc3e8600b",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa0685c07ffa8d6014",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efab5e64ae8b05499fb",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaeae734196d3c58ed",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efad6f0d19a02911a0f",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa7f0461636c084826",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efad0510f84f04e1c30",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efac7082c7278cea58d",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa63d7f2e4e8051b76",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaae3056223c699093",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa69cb2e53d7728218",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa1c697d9a3f025607",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa8159fdbb662e72f7",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efac8ec9e29a32ef6a6",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa8e0af54f9051cfbb",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa43d9db98aa6c9550",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa86458a7f44ef13ca",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa801b070b38d47aaa",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa3c264d8f766d6aff",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa14907f6ef1603f95",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa3829d4bec8b0dbfc",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa417b8a7950d866de",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efab7886c6093d24994",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaf939de59c3c7c8e0",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa542903805d3e705b",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efad9db3a50a762e756",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efae41dcfcfac0b4b4c",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaba4e5543d340b983",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa8392440470881f21",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac3254a646e998a93",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac70661583fd84717",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efab922bd8313334ab7",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa20369c49172f8e59",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa8e610c0e3ec906f4",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaa10b9bf48478c2fb",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efad00def91475a6690",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa07efc5439127c992",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa76b7550fc81f2527",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa0c0c8e9bc67effb9",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efabccc4a22582ac333",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaad56c247416d4177",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac7a61140b1e98067",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaba87a88a1e11aca6",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efafaf01a4d0b95b074",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa912f83a141f5c6f3",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa991c8d40276bb5b5",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa70993469065e7c00",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa1305e5349fa4405c",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efab3eecd5dd90cfdfc",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa2ad3bd583fb64328",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efabc4bfdb4fc8e8fa1",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa5970f10eb35331c7",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa6381866f47acf5e8",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaf70f6381aa11a93e",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa21a325f1e2c2a732",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaf0a3a91f971d7739",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa2c3673213fa57618",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa758ee087c42cc41b",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa44864a58e1efeb28",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa062bf154353b7f21",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaee2fe344d73461ec",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efac6a9f4355489fc75",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa30fbf8617cee728a",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa5e923b08fee363a6",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa160f1e598eff941b",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa406b9ee4495e329c",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa20fea4b9f948a536",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa139183f97484ac1a",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaa1a5c174785a3bb0",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa6a419923fbc17b34",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa20c86d8334c291f6",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa38f65fb342572ff7",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efae6d28a931e48202a",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efacd41230900b6f6e9",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa56ef39623ffd87d8",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efae07081d2868d78fb",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac282aa8d51c31eef",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efac748b7593d803654",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa1ca58438a3735212",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa74c16b27b88ef0c4",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaf463a09aa56e0342",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa9f19ae8d4ea424d1",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efacd56a11743926ac9",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa42e50523efc95b1c",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaa10e814f388ad2d2",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa2f5834afdea55139",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaf9dc5ce661118c35",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa756cacc2debe99e3",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa7817aa0aa9c613de",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa50fd739d2422d939",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa0ba3dfbe7001bdc2",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa1e87356399870587",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa446926f8a5cb6dc7",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa7525b83b7ac5106e",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa08e39df898bbff91",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa7a5da3a4a5ff4060",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efabbb2a7d513e0f439",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efafee5d4a1a0d88c17",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa9b5a5ca9fb309bc5",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa4a8ee4a2fee96481",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa3dc39196021e5356",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa2ebe9b3a70df519a",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa37ba11b948c13274",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaba98e6bedc62a6d0",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac021b3af6e57cb4b",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa61128f7b7bddf147",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa72ea66b8857946b1",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa5e045af963758bbd",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa900b1ccf7df596e5",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaf46f05e7c619f908",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa2b4b161725786bed",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa00062c6a5f6f111f",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa1797f3ceaad6504a",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa9a6b4c356e7cc5f0",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efab6717c5e15ebe343",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efab12eac124c6abe70",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa7a28367801f4a272",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa1f9a7e138c3b3523",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa18386550e85c8c36",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa0cba9d45d0bafa46",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa2ceecc4949e374a9",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa204e64fd41993aa9",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa960ed5f1aa3f25c0",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa2c1c37ac16c5921a",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6eface7ee976d91a0ce1",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa3a4d4c53fe85eaeb",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa6848361e957ff61a",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa5e54eb0e3f569041",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaed11ff1aaf23408f",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efadc054c03b39bb7f1",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa6e9c9c90e9f1846d",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa147261eec036f4a7",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efab697e2ce09390816",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa8ebfe3e12dac52c6",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa134ce258036ea28d",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa5d4e16c294d93b97",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efabfede8bd98487d96",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efac10a4c3e5f3044cd",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efab2ba4b2f8d81c4c2",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaab0c4be4bd6ef383",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa304793bdf3b1f48b",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa8b87829f158d25f2",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efab1d9adb841438de6",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaba832e22685c4a1f",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa1cf44a626742006c",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa5139842bb8ed4e88",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa16e56eaa53c6b270",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa59b0863252d2ae0f",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaa67b1c912f677f8a",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa9499192aa4e8cb54",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa27df3ed5fb169a55",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efad1bddddd335e845e",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efae8de1b8dff14d1cc",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efae42375b94552143c",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa7b74eb446f85626f",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa5da2fb14958d251e",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa1cad04fa95fc6faf",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efabb806f7676ddf7d6",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa0dac6f59b7fc1ee8",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efaf482628f43143dda",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa9744f261bc724149",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa4cb0dd1a8de7f7db",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efae8c090e9c4ab377c",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa86746069c8617555",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efadff00dcd37ea5d82",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efae3dc36bc1d08f6f2",
          "campus": "gaza",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa20bfa62239d924cc",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa8f19db0a42d5cbf3",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efae853c40a1339e0a9",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efab23474877858dbad",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efaf8a142f1fee651f0",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa4c426f24c0c63893",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa5e08d53a1f8c8ec5",
          "campus": "khaleel",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa11bdaa23d5f0b77b",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa9a889218d44ea0aa",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa6cbd6780bb695088",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaf00f4afb19f6255c",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efae76d8ed25c5da8cf",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa0e8ae105628709ff",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efada8190f4e76f28a3",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaa7c3bf8edee09a94",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa67fe9731afcc66ca",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa2a74c4023c0d996a",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efafd768269e79624b8",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaa8a9aeee4bed4d86",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa85b69b478fe8fc28",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa103d6cca3af6b50f",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa3541607b77368178",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa02378a1c7cd9d91f",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa5e1dc2a91ad2da6d",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaf461b33cc2f96a24",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaec5f78157377e2d8",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa2177427893f78127",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa3165a9aa39293899",
          "campus": "khaleel",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efad40816eb8e060507",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa9ea1ef9f9f94fabc",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa35e522bcd18fb55b",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa3aac0e2c45f50936",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa4db301619d0f9d62",
          "campus": "london",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa83cb79022221e1a9",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaac2e9189c6623953",
          "campus": "london",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaef1231ee6cca7779",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa07392ccd7cce40d2",
          "campus": "gaza",
          "gender": "female",
          "role": "alumni"
        },
        {
          "id": "5d7b6efacee7c634f3cf59d0",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa6a984f954e1bc06f",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efac613085c9cefa017",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa1d8dadefa111ea18",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efa9a47b3d33d9cf4b9",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa1039ffa8e46f9723",
          "campus": "london",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa13803f26698c644d",
          "campus": "khaleel",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efa676f60126a9b4fda",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa677efc93271d2d99",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa11858e89f23dfa54",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efac15f682688782d0c",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efaeb1c33018dc16f04",
          "campus": "khaleel",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa255e4683b5472282",
          "campus": "london",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efab9914f0f15eacfb8",
          "campus": "khaleel",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efaeab71a6e5b96c195",
          "campus": "london",
          "gender": "male",
          "role": "student"
        },
        {
          "id": "5d7b6efad0e7f2640759bc8c",
          "campus": "london",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa8a7f11e27a719c21",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa38ba0b4708e47e4e",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa18f69a06c333c5fa",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa1deea076597a638c",
          "campus": "gaza",
          "gender": "female",
          "role": "mentor"
        },
        {
          "id": "5d7b6efa7cd0cb4a22160289",
          "campus": "gaza",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6eface2c3487cb5d973d",
          "campus": "khaleel",
          "gender": "female",
          "role": "student"
        },
        {
          "id": "5d7b6efac28538c8b262ea47",
          "campus": "gaza",
          "gender": "male",
          "role": "alumni"
        },
        {
          "id": "5d7b6efa4e03f4b21e5723bc",
          "campus": "gaza",
          "gender": "male",
          "role": "mentor"
        }
      
    ]
  }
  getY2Coordinate = (index, dotsPerRow, radius) => {
    const placeInCol = Math.floor(index / dotsPerRow)
    const circlePadding = 5
    return placeInCol * (circlePadding + radius * 2)
  }

  getX2Coordinate = (index, dotsPerRow, radius) => {
    const placeInRow = index % dotsPerRow
    const circlePadding = 5
    return placeInRow * (radius * 2 + circlePadding)
  }

  campusXCoordinate = campus => {
    switch (campus) {
      case 'gaza':
        return 0
      case 'khaleel':
        return 250
      case 'london':
        return 500
    }
  }

  getColorForCampus = campus => {
    switch (campus) {
      case 'gaza':
        return 'coral'
      case 'khaleel':
        return 'steelblue'
      case 'london':
        return 'lightsteelblue'
    }
  }

  componentDidMount() {
    const { data } = this.state

    const dotsPerRow = 8
    const radius = 8
    const leftBoxPadding = 5
    const topBoxPadding = 100
    const campuses = data.reduce((acc, curr) => {
      if (!acc.includes(curr.campus)) acc.push(curr.campus)
      return acc
    }, [])

    const chart_width = Math.max(window.innerWidth - 600, 700)
    const chart_height = 500
    const svg = d3
      .select('svg')
      .attr('width', chart_width)
      .attr('height', chart_height)

  svg
      .selectAll('text')
      .data(campuses)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', d => this.campusXCoordinate(d) + leftBoxPadding)
      .attr(
        'y',
        d => this.getY2Coordinate(0, dotsPerRow, radius) + topBoxPadding - 30
      )
      .attr('font-family', 'futura')
      .attr('fill', 'lightslategray')

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('path')

      .attr(
        'd',
        'M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'
      )
      .attr('transform', d => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        const x = campusXCoordinate + leftBoxPadding
        const y = this.getY2Coordinate(0, dotsPerRow, radius) + topBoxPadding
        return 'translate(' + x + ',' + y + ')'
      })
      .attr('fill', d => this.getColorForCampus(d.campus))

    d3.selectAll('path')
      .transition()
      .duration(500)
      .attr('transform', d => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        const index = this.findIndexOfDataInGroup(d)
        const x =
          campusXCoordinate +
          this.getX2Coordinate(index, dotsPerRow, radius) +
          leftBoxPadding

        const y =
          this.getY2Coordinate(index, dotsPerRow, radius) + topBoxPadding

        return 'translate(' + x + ',' + y + ')'
      })
  }

  findIndexOfDataInGroup = d => {
    const { data } = this.state
    const colGroup = data.filter(data => data.campus === d.campus)
    return colGroup.findIndex(data => data.id === d.id)
  }
  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Matrix</h1>
        <svg></svg>
      </section>
    )
  }
}
