Execute o seguinte comando para criar um novo projeto React Native chamado

```shell
npx create-expo-app newProject

cd newProject
npx expo start
```

Em seguida o terminal vai pedir para instalar tais dependências 

```shell
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config
```

<p style='font-size:13px'><b>react-native-web@~0.19.6</b>: Isso indica que você deseja instalar a versão 0.19.6 do pacote react-native-web. O react-native-web é um projeto que permite renderizar componentes React Native em um ambiente de navegador, permitindo que você compartilhe parte do código entre seus aplicativos móveis e web.</p>

Se ocorreu um erro exclua a pasta <b>node_modules</b> e execute o comando <b>yarn</b> e em seguida execute o <b>npx expo start</b>

<hr>

Para você poder fazer mais de uma tela no aplicativo é necessário usar o <b>Navigator</b> e instalar as seguintes dependências 

```shell
    yarn add @react-navigation/native
    yarn add react-native-safe-area-context
    yarn add react-native-screens
    yarn add react-native-svg
    yarn add @react-navigation/native-stack
    yarn add react-native-mask-input
```

```shel
yarn add @react-navigation/native
```
 <p style='font-size:13px'><b>#yarn add @react-navigation/native</b> Ele fornece um conjunto de componentes e utilitários para gerenciar a navegação entre diferentes telas ou seções do seu aplicativo.</p>

```shel
 yarn add react-native-safe-area-context
```
<p style='font-size:13px'><b>#yarn add react-native-safe-area-context </b>As áreas seguras são as regiões ao redor da tela que garantem que o conteúdo não seja cortado, como a parte superior onde fica a barra de status e a parte inferior onde fica a barra de navegação.</p>

```shel
yarn add react-native-screens
```
<p style='font-size:13px'><b>#yarn add react-native-screens</b> que otimiza a navegação entre as telas do seu aplicativo. Ela oferece uma implementação nativa de telas para melhor desempenho e eficiência.</p>

```shel
yarn add react-native-svg
```
<p style='font-size:13px'><b>#yarn add react-native-svg</b>que permite renderizar gráficos vetoriais escaláveis (SVG) no seu aplicativo React Native. Isso é útil para criar elementos gráficos e ícones com qualidade de imagem em várias resoluções de tela.</p>

```shel
yarn add @react-navigation/native-stack
```
<p style='font-size:13px'><b>#yarn add @react-navigation/native-stack</b>A navegação de pilha é comumente usada para empilhar telas umas sobre as outras, permitindo que os usuários naveguem para trás e para frente.</p>

```shel
yarn add react-native-mask-input
```
<p style='font-size:13px'><b>#yarn add react-native-mask-input</b>fornece um componente de entrada de texto com máscara. Isso é útil quando você deseja formatar ou validar entradas de texto de acordo com um padrão específico, como números de telefone, CPFs ou datas.</p>


Em seguida o terminal vai pedir para você instalar a seguinte dependência

```shel
yarn add @react-navigation/native-stack
```
<p style='font-size:13px'> exemplo: Vamos supor que você queira criar um campo de entrada para um número de telefone com a máscara "(XX) XXXX-XXXX". Ao usar a biblioteca react-native-mask-input, você pode configurar o campo para exibir automaticamente os parênteses e o hífen nos locais apropriados enquanto o usuário digita o número.</p>

<hr>

Importar no topo do arquivo App.js os arquivos

```shel
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
```

Adicionar no seu return a estrutura Stack.Navigator conforme estrutura a seguir: uma Stack.Screen para cada página do seu projeto

```shel
return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginForm}
                options={{ title: 'Bem vindo ' }} />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ title: 'Dashboard' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
```
